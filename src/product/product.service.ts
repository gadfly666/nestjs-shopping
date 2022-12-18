import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Not, OptimisticLockVersionMismatchError, Repository } from 'typeorm';
import { Product, ProductStatus, ProductType, ProductOption } from './product.entity';
import { ProductInput, ProductOptionInput } from './product.input';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { type } from 'os';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(ProductType)
    private productTypeRepository: Repository<ProductType>,
    @InjectRepository(ProductOption)
    private productOptionRepository: Repository<ProductOption>,
    private readonly logger: Logger,
  ) {}

  async create(input: ProductInput): Promise<Product> {
    const {
      options,
      type,
      images,
      ...rest
    } = input

    let product = this.productRepository.create(rest);

    if (type) {
      let type_ = this.productTypeRepository.create({...type})
      type_ = await this.productTypeRepository.save(type_)
      product.typeId = type_.id
    }

    // TODO load produtions options to response
    await Promise.all(
      (options ?? []).map(async (option) => {
        const res = this.productOptionRepository.create({
          ...option,
          productId: product.id,
        })
        await this.productOptionRepository.save(res)
      })
    )

    // Cannot create product which is deleted
    if (product.status == ProductStatus.DELETED) {
      product.status = ProductStatus.DRAFT;
    } 

    product = await this.productRepository.save(product);
    return await this.retrieve(product.id);
  }

  async retrieve(id: bigint): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: {
        "id": id,
        "status": Not(ProductStatus.DELETED)
      },
      relations: ["type", "options"]
    });


    if (!product) {
      throw new NotFoundException({
        "productId": id
      });
    }

    return product;
  }

  async update(id: bigint, input: ProductInput): Promise<Product> {
    let product = await this.productRepository.findOne({
      where: {
        "id": id,
        "status": Not(ProductStatus.DELETED)
      },
      relations: ["type", "options"]
    })

    if (!product) {
      throw new NotFoundException({
        "productId": id
      });
    }

    const {
      options,
      type,
      images,
      ...rest
    } = input

    for (const [key, value] of Object.entries(rest)) {
      if (value !== "undefined") {
        product[key] = value
      }
    }

    // Currently skipping update options
    product = await this.productRepository.save(product);
    return product;
  }
  

  async delete(id: bigint): Promise<void> {
    const product = await this.productRepository.findOne({
      where: {
        "id": id,
        "status": Not(ProductStatus.DELETED)
      }
    })

    if (product) {
      product.status = ProductStatus.DELETED;
      product.deletedAt = new Date();
      await this.productRepository.save(product);
    }

    // ?
    return Promise.resolve()
  }

  async addOption(productId: bigint, optionInput: ProductOptionInput): Promise<Product> {

    const product = await this.productRepository.findOne({
      where: {
        "id": productId
      },
      relations: ["options"]
    });

    if (!product) {
      throw new NotFoundException({
        "productId": productId
      });
    }

    if (product.options.find((o) => o.title !== optionInput.title)) {
      const option = this.productOptionRepository.create({...optionInput});
      await this.productOptionRepository.save(option);
    }
    
    return await this.retrieve(productId);

  }

  async updateOption(productId: bigint, optionId: bigint, optionInput: ProductOptionInput): Promise<Product> {

    let option = await this.productOptionRepository.findOne({
      where: {
        "id": optionId,
        "productId": productId
      },
      relations: ["product"]
    });

    if (!option) {
      throw new NotFoundException({
        "productId": productId,
        "optionId": optionId
      });
    }

    if (option.product.options.find((o) => (o.title !== optionInput.title))) {
      option.title = optionInput.title;
      option.metadata = optionInput.metadata;
      await this.productOptionRepository.save(option);
    }

    return await this.retrieve(productId);
  }

  async deleteOption(productId: bigint, optionId: bigint, optionInput: ProductOptionInput): Promise<void> {
    
    let option = await this.productOptionRepository.findOne({
      where: {
        "id": optionId,
        "productId": productId
      },
      relations: ["product"]
    });

    if (option) {
      await this.productOptionRepository.remove(option);
    }
    
    return Promise.resolve();
  }

}

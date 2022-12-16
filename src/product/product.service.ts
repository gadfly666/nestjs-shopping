import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Not, Repository } from 'typeorm';
import { Product, ProductStatus, ProductType, ProductOption } from './product.entity';
import { ProductInput } from './product.input';
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
  

  async delete(id: bigint) {
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
  }

}

import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product, ProductStatus } from './product.entity';
import { ProductDto } from './product.dto';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectMapper()
    private mapper: Mapper,
    private readonly logger: Logger,
  ) {}

  async create(dto: ProductDto): Promise<ProductDto> {
    const product = this.mapper.map(dto, ProductDto, Product);
    await this.productRepository.save(product);
    return this.mapper.map(product, Product, ProductDto);
  }

  async retrieve(id: bigint): Promise<ProductDto> {
    const product = await this.productRepository.findOne({
      where: {
        "id": id
      }
    });


    if (!product) {
      throw new NotFoundException({
        "productId": id
      });
    }

    return this.mapper.map(product, Product, ProductDto);
  }

  async update(id: bigint, dto: ProductDto): Promise<ProductDto> {
    const product = await this.productRepository.findOne({
      where: {
        "id": id
      }
    })

    if (product) {
      this.mapper.mutate(dto, product, ProductDto, Product);
      this.productRepository.save(product);
      return this.mapper.map(product, Product, ProductDto);
    }

    throw new NotFoundException({
      "productId": id
    });
  }
  

  async delete(id: bigint) {
    const product = await this.productRepository.findOne({
      where: {
        "id": id
      }
    })

    if (product) {
      product.status = ProductStatus.DELTED;
      product.deletedAt = new Date();
      await this.productRepository.save(product);
    }

  }

}
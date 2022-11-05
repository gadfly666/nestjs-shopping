import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
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
  ) {}

  create(dto: ProductDto): ProductDto {
    const product = this.mapper.map(dto, ProductDto, Product);
    this.productRepository.save(product);
    return this.mapper.map(product, Product, ProductDto);
  }

  async retrieve(id: bigint): Promise<ProductDto> {
    const product = await this.productRepository.findOne({
      where: {
        "id": id
      }
    })

    if (product) {
      return this.mapper.map(product, Product, ProductDto);
    }

    throw new NotFoundException({
      "productId": id
    });
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
      this.productRepository.delete(product);
    }

  }

}
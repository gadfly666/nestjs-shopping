import { Controller, Post, Get, Put, Delete, Param, Body, Res, Inject, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { ProductDto } from './product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor( 
    @Inject() private service: ProductService,
  ) {}  

  @Post()
  create(@Body() dto: ProductDto): ProductDto {
    return this.service.create(dto);
  }

  @Get(':id')
  async retrieve(@Param('id') id: bigint): Promise<ProductDto> {
    return await this.service.retrieve(id);
  }

  @Put(':id')
  async update(@Param('id') id: bigint, @Body() dto: ProductDto): Promise<ProductDto> {
    return await this.service.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: bigint, @Res() res: Response) {
    await this.service.delete(id);
    res.status(HttpStatus.OK).json({"message": "success"});
  }

}

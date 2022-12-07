import { Controller, Post, Get, Put, Delete, Param, Body, Res, Inject, HttpStatus } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { ProductDto } from './product.dto';
import { ProductService } from './product.service';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor( 
    private service: ProductService,
  ) {}  

  @ApiOkResponse({type: ProductDto})
  @Post()
  create(@Body() dto: ProductDto): ProductDto {
    return this.service.create(dto);
  }

  @ApiOkResponse({type: ProductDto})
  @ApiParam({name: 'id', type: 'number'})
  @Get(':id')
  async retrieve(@Param('id') id: bigint): Promise<ProductDto> {
    return await this.service.retrieve(id);
  }

  @ApiOkResponse({type: ProductDto})
  @ApiParam({name: 'id', type: 'number'})
  @Put(':id')
  async update(@Param('id') id: bigint, @Body() dto: ProductDto): Promise<ProductDto> {
    return await this.service.update(id, dto);
  }

  @ApiParam({name: 'id', type: 'number'})
  @Delete(':id')
  async delete(@Param('id') id: bigint, @Res() res: Response) {
    await this.service.delete(id);
    res.status(HttpStatus.OK).json({"message": "success"});
  }

}

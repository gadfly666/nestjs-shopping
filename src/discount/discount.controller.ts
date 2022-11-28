import { Controller, Inject, Post, Put, Get, Delete, Param, Body, Res, HttpStatus } from '@nestjs/common';
import { DiscountService } from './discount.service';
import { DiscountDto } from './discount.dto';
import { Response } from 'express';

@Controller('discount')
export class DiscountController {
  
  constructor( 
    private service: DiscountService,
  ) {}  

  @Post()
  create(@Body() dto: DiscountDto): DiscountDto {
    return this.service.create(dto);
  }

  @Get(':id')
  async retrieve(@Param('id') id: bigint): Promise<DiscountDto> {
    return await this.service.retrieve(id);
  }

  @Put(':id')
  async update(@Param('id') id: bigint, @Body() dto: DiscountDto): Promise<DiscountDto> {
    return await this.service.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: bigint, @Res() res: Response) {
    await this.service.delete(id);
    res.status(HttpStatus.OK).json({"message": "success"});
  }

}

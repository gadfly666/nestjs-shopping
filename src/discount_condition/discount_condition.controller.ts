import { Controller, Inject, Post, Put, Get, Delete, Param, Body, Res, HttpStatus } from '@nestjs/common';
import { DiscountConditionService } from './discount_condition.service';
import { DiscountConditionDto } from './discount_condition.dto';
import { Response } from 'express';

@Controller('discount-condition')
export class DiscountConditionController {

  constructor( 
    @Inject() private service: DiscountConditionService,
  ) {}  
    
  @Post()
  create(@Body() dto: DiscountConditionDto): DiscountConditionDto {
    return this.service.create(dto);
  }
  
  @Get(':id')
  async retrieve(@Param('id') id: bigint): Promise<DiscountConditionDto> {
    return await this.service.retrieve(id);
  }
  
  @Put(':id')
  async update(@Param('id') id: bigint, @Body() dto: DiscountConditionDto): Promise<DiscountConditionDto> {
    return await this.service.update(id, dto);
  }
  
  @Delete(':id')
  async delete(@Param('id') id: bigint, @Res() res: Response) {
    await this.service.delete(id);
    res.status(HttpStatus.OK).json({"message": "success"});
  }

}

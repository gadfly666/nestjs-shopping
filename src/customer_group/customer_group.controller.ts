import { Controller, Inject, Post, Put, Get, Delete, Param, Body, Res, HttpStatus } from '@nestjs/common';
import { CustomerGroupService } from './customer_group.service';
import { CustomerGroupDto } from './customer_group.dto';
import { Response } from 'express';

@Controller('customer-group')
export class CustomerGroupController {
  constructor( 
    private service: CustomerGroupService,
  ) {}  

  @Post()
  create(@Body() dto: CustomerGroupDto): CustomerGroupDto {
    return this.service.create(dto);
  }

  @Get(':id')
  async retrieve(@Param('id') id: bigint): Promise<CustomerGroupDto> {
    return await this.service.retrieve(id);
  }

  @Put(':id')
  async update(@Param('id') id: bigint, @Body() dto: CustomerGroupDto): Promise<CustomerGroupDto> {
    return await this.service.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: bigint, @Res() res: Response) {
    await this.service.delete(id);
    res.status(HttpStatus.OK).json({"message": "success"});
  }
}

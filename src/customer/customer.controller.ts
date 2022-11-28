import { Controller, Inject, Post, Put, Get, Delete, Param, Body, Res, HttpStatus } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDTO } from './customer.dto';
import { Response } from 'express';

@Controller('customer')
export class CustomerController {
  constructor( 
    private service: CustomerService,
  ) {}  

  @Post()
  create(@Body() dto: CustomerDTO): CustomerDTO {
    return this.service.create(dto);
  }

  @Get(':id')
  async retrieve(@Param('id') id: bigint): Promise<CustomerDTO> {
    return await this.service.retrieve(id);
  }

  @Put(':id')
  async update(@Param('id') id: bigint, @Body() dto: CustomerDTO): Promise<CustomerDTO> {
    return await this.service.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: bigint, @Res() res: Response) {
    await this.service.delete(id);
    res.status(HttpStatus.OK).json({"message": "success"});
  }
}

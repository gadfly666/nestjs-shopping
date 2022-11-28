import { Controller, Post, Get, Put, Delete, Param, Body, Res, Inject, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { GiftCardDto } from './gift_card.dto';
import { GiftCardService } from './gift_card.service';

@Controller('gift-card')
export class GiftCardController {

  constructor( 
    private service: GiftCardService,
  ) {}  

  @Post()
  create(@Body() dto: GiftCardDto): GiftCardDto {
    return this.service.create(dto);
  }

  @Get(':id')
  async retrieve(@Param('id') id: bigint): Promise<GiftCardDto> {
    return await this.service.retrieve(id);
  }

  @Put(':id')
  async update(@Param('id') id: bigint, @Body() dto: GiftCardDto): Promise<GiftCardDto> {
    return await this.service.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: bigint, @Res() res: Response) {
    await this.service.delete(id);
    res.status(HttpStatus.OK).json({"message": "success"});
  }

}

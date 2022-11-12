import { Module } from '@nestjs/common';
import { DiscountController } from './discount.controller';
import { DiscountProfile } from './discount.profile';

@Module({
  imports: [DiscountProfile],
  controllers: [DiscountController]
})
export class DiscountModule {}

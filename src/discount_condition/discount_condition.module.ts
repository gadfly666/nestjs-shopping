import { Module } from '@nestjs/common';
import { DiscountConditionController } from './discount_condition.controller';

@Module({
  controllers: [DiscountConditionController]
})
export class DiscountConditionModule {}

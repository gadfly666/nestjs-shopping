import { Module } from '@nestjs/common';
import { CustomerGroupController } from './customer_group.controller';

@Module({
  controllers: [CustomerGroupController]
})
export class CustomerGroupModule {}

import { Module } from '@nestjs/common';
import { CustomerGroupController } from './customer_group.controller';
import { CustomerGroupProfile } from './customer_group.profile';

@Module({
  imports: [CustomerGroupProfile],
  controllers: [CustomerGroupController]
})
export class CustomerGroupModule {}

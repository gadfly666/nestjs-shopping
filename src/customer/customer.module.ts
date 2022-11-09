import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerProfile } from './customer.profile';

@Module({
  imports: [CustomerProfile], 
  controllers: [CustomerController]
})
export class CustomerModule {}

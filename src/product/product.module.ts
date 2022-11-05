import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductProfile } from './product.profile';

@Module({
  providers: [ ProductProfile ],
  controllers: [ProductController]
})
export class ProductModule {}

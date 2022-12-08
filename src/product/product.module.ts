import { Module, Logger } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductProfile } from './product.profile';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Product])], 
  providers: [ ProductProfile, ProductService, Logger ],
  controllers: [ProductController]
})
export class ProductModule {}

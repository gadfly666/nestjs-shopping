import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService, LoggingService } from './app.service';
import { ProductModule } from './product/product.module';
import { AutomapperModule } from "@automapper/nestjs";
import { classes } from '@automapper/classes';
import { GiftCardModule } from './gift_card/gift_card.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CollectionModule } from './collection/collection.module';
import { CustomerModule } from './customer/customer.module';
import { CustomerGroupModule } from './customer_group/customer_group.module';
import { DiscountController } from './discount/discount.controller';
import { DiscountModule } from './discount/discount.module';
import { DiscountConditionModule } from './discount_condition/discount_condition.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

const DatabaseModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || '',
  database: process.env.DATABASE || ''
})

@Module({
  imports: [
    ProductModule, 
    DatabaseModule,
    AutomapperModule,
    GiftCardModule,
    CollectionModule,
    CustomerModule,
    CustomerGroupModule,
    DiscountModule,
    DiscountConditionModule,
    UserModule,
    AuthModule
  ],
  controllers: [AppController, DiscountController],
  providers: [AppService, LoggingService],
})
export class AppModule {}
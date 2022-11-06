import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { AutomapperModule } from "@automapper/nestjs";
import { classes } from '@automapper/classes';
import { GiftCardModule } from './gift_card/gift_card.module';

@Module({
  imports: [
    ProductModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'shopping',
      entities: [],
      synchronize: true,
    }),
    AutomapperModule.forRoot(
      { strategyInitializer: classes() }
    ),
    GiftCardModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
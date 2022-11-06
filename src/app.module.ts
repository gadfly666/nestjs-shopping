import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { AutomapperModule } from "@automapper/nestjs";
import { classes } from '@automapper/classes';
import { GiftCardModule } from './gift_card/gift_card.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './app.configuration';

@Module({
  imports: [
    ProductModule, 
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        ...config.get<any>('database'),
        entities: [],
        synchronize: true,
      }),
      inject: [ConfigService]
    }),
    AutomapperModule.forRoot(
      { strategyInitializer: classes() }
    ),
    ConfigModule.forRoot({
      load: [configuration]
    }),
    GiftCardModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
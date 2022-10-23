import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter, SystemExceptionFilter } from "./app.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(
    [HttpExceptionFilter, SystemExceptionFilter]
  )
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter, SystemExceptionFilter } from "./app.filter";
import { LoggingService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(
    new HttpExceptionFilter(), new SystemExceptionFilter()
  );
  const loggingService = app.get(LoggingService);
  app.useLogger(loggingService.getLogger())
  await app.listen(3000);
}
bootstrap();

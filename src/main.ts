import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SystemExceptionFilter } from "./app.filter";
import { LoggingService } from './app.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const loggingService = app.get(LoggingService);
  app.useGlobalFilters(
    new SystemExceptionFilter()
  );
  app.useLogger(loggingService.getLogger())
  
  const config = new DocumentBuilder()
    .setTitle('Shooping Admin API')
    .setDescription('')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);

  await app.listen(3000);
}
bootstrap();

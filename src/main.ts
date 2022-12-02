import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SystemExceptionFilter } from "./app.filter";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(
    app.get(SystemExceptionFilter)
  );

  // app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER))
  
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

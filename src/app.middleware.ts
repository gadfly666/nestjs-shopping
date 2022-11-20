import { Injectable, Inject, NestMiddleware } from '@nestjs/common';
import { LoggingService } from './app.service';

@Injectable()
export class RequestLogMiddleware implements NestMiddleware {

  constructor(
    @Inject() private loggingService: LoggingService
  ){}

  use(req: any, res: any, next: () => void) {
    this.loggingService.info(`${req}`);
    this.loggingService.info(`${res}`);
    next();
  }
}

import { Injectable } from '@nestjs/common';
import * as winston from 'winston';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class LoggingService {
  private logger: winston.Logger;


  constructor() {
    const logger = winston.createLogger({
      level: 'error',
      format: winston.format.json(),
      transports: [
        new winston.transports.Console(),
      ]
    });
    
    if (process.env.NODE_ENV !== 'production') {
      logger.add(new winston.transports.Console({
        format: winston.format.simple(),
      }));
    }
  
    this.logger = logger;
  }

  public info(message: string) {
    this.logger.info(message);
  }

  public error(error: Error) {
    this.logger.error(error);
  }

  public getLogger(): winston.Logger {
    return this.logger;
  }

}

import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();

    ctx.getResponse<Response>()
      .status(exception.getStatus())
      .json({
        statusCode: exception.getStatus(),
        error: exception.message,
        timestamp: new Date().toISOString(),
        path: ctx.getRequest<Request>().url,
      });
  }
}

@Catch()
class SystemExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();

    ctx.getResponse<Response>()
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        error: "Internal Server Error",
        timestamp: new Date().toISOString(),
        path: ctx.getRequest<Request>(),
      });
  }
}

export {
  HttpExceptionFilter,
  SystemExceptionFilter
}

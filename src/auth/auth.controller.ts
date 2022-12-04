import { Controller, Request, Post, UseGuards, Inject } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { LocalAuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(
    private service: AuthService,
  ){}

  @ApiBody({
    schema: {
      type: "object",
      properties: {
        username: {
          type: "string"
        },
        password: {
          type: "string"
        }
      },
      required: ["username", "password"]
    }
  })
  @UseGuards(LocalAuthGuard)
  @Post("/login")
  async login(@Request() req): Promise<any> {
    return await this.service.login(req.user);
  }

}

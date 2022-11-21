import { Controller, Request, Post, UseGuards, Inject } from '@nestjs/common';
import { LocalAuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(
    @Inject()
    private service: AuthService,
  ){}

  @UseGuards(LocalAuthGuard)
  @Post("/login")
  async login(@Request() req): Promise<any> {
    return await this.service.login(req.user);
  }

}

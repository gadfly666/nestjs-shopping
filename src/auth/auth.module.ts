import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      //TODO: the jwt secret
      secret: "Very secret",
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}

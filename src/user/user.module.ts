import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { User, UserLoginSession } from './user.entity';

@Module({
  imports : [TypeOrmModule.forFeature([User, UserLoginSession])],
  providers: [UserService],
  exports: [TypeOrmModule]
})
export class UserModule {}

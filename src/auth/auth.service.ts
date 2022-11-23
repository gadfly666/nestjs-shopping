import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserLoginSession } from '../user/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import * as uuid from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(UserLoginSession)
    private userLoginSessionRepository: Repository<UserLoginSession>,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<User> {

    const user = await this.userRepository.findOne({
      where: {
        "username": username,
      }
    });

    if (user && bcrypt.compare(password, user.passwordHash)) {
      return user;
    }
    return null;

  }

  async login(user: User): Promise<any> {

    var session = new UserLoginSession();
    session.userId = user.id;
    session.uuid = uuid.v4()

    session = await this.userLoginSessionRepository.save(session)

    return {
      access_token: this.jwtService.sign(session),
    };
  }


}

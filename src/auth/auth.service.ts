import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { User } from 'src/users/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private prisma: PrismaService) {}

  async login(loginDto: LoginDto): Promise<string> {
    const user = await this.prisma.user.findFirst({
      where: { username: loginDto.username },
    });

    if (!user || !(await bcrypt.compare(loginDto.password, user.password))) {
      throw new UnauthorizedException();
    }

    return this.jwtService.sign({ username: user.username, sub: user.id });
  }

  async validateUser(payload: any): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: { id: payload.sub },
    });

    return user;
  }
}

import { Controller, Post, Body, UseGuards, Req, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return { token: await this.authService.login(loginDto) };
  }

  @UseGuards(JwtGuard)
  @Get('me')
  getProfile(@Req() req) {
    delete req.user.password;
    return req.user;
  }
}

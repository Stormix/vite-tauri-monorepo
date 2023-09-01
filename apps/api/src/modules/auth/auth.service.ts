import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcryptjs';
import { UserService } from 'src/models/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async login(
    email: string,
    password: string,
  ): Promise<{
    access_token: string;
  }> {
    const user = await this.userService.find({
      email,
    });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      throw new UnauthorizedException();
    }

    const payload = { id: user.id, email: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { Request } from 'express';
import { UserService } from 'src/models/user/user.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async currentUser(req: Request): Promise<User> {
    try {
      // Get JWT from cookie
      const token = req.cookies['access_token'];

      if (!token) {
        this.logger.error('No token found');
        throw new UnauthorizedException();
      }

      // Verify JWT
      const payload = await this.jwtService.verifyAsync(token);

      // Get user
      return this.userService.find({
        id: payload.id,
      });
    } catch (e) {
      this.logger.error(e, 'Failed to get current user');
      throw new UnauthorizedException();
    }
  }

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

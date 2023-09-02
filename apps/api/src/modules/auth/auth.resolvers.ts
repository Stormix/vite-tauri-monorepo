import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/client';
import express from 'express';
import { AuthService } from './auth.service';

@Resolver('Auth')
export class AuthResolvers {
  constructor(private readonly authService: AuthService) {}

  @Query('currentUser')
  async currentUser(@Context('req') req: express.Request): Promise<User> {
    return this.authService.currentUser(req);
  }

  @Mutation('logout')
  async logout(@Context('req') req: express.Request): Promise<boolean> {
    req.res?.clearCookie('access_token');
    return true;
  }

  @Mutation('login')
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
    @Context('req') req: express.Request,
  ): Promise<string> {
    const { access_token } = await this.authService.login(email, password);

    req.res?.cookie('access_token', access_token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    });

    return 'Logged in successfully';
  }
}

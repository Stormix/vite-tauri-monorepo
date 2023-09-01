import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import express from 'express';
import { AuthService } from './auth.service';

@Resolver('Auth')
export class AuthResolvers {
  constructor(private readonly authService: AuthService) {}

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

    return access_token;
  }
}

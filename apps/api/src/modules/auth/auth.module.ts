import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/models/user/user.module';
import { AuthResolvers } from './auth.resolvers';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7 days' },
    }),
    UsersModule,
  ],
  providers: [AuthResolvers, AuthService],
})
export class AuthModule {}

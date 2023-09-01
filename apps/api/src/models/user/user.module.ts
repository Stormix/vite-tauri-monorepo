import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserResolvers } from './user.resolvers';
import { UserService } from './user.service';

@Module({
  providers: [UserResolvers, UserService],
  imports: [PrismaModule],
})
export class UsersModule {}

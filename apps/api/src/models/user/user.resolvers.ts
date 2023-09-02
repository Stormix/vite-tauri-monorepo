import { Args, Mutation, Resolver } from '@nestjs/graphql';
import bcryptjs from 'bcryptjs';
import { User } from '../../types/graphql';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolvers {
  constructor(private readonly userService: UserService) {}
  @Mutation('createUser')
  async createUser(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('name') name: string,
  ): Promise<User> {
    return this.userService.createUser({
      email,
      password: bcryptjs.hashSync(password, 10),
      name,
    });
  }
}

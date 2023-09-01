import { Query, Resolver } from '@nestjs/graphql';
import { User } from '../../types/graphql';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolvers {
  constructor(private readonly userService: UserService) {}

  @Query('users')
  async users(): Promise<User[]> {
    return this.userService.findAll({});
  }
}

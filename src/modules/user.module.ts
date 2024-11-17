import { Module } from '@nestjs/common';
import { CreateUserUseCase } from 'src/application/use-cases/users/create-user/create-user.use-case';
import { UpdateUserUseCase } from 'src/application/use-cases/users/update-user/update-user.use-case';

@Module({
  imports: [],
  controllers: [],
  providers: [CreateUserUseCase, UpdateUserUseCase],
})
export class UserModule {}

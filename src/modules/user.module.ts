import { Module } from '@nestjs/common';
import { CreateUserUseCase } from 'src/application/use-cases/users/create-user/create-user.use-case';

@Module({
  imports: [],
  controllers: [],
  providers: [CreateUserUseCase],
})
export class UserModule {}

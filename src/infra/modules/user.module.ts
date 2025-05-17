import { Module } from '@nestjs/common';
import { CreateUserUseCase } from 'src/application/use-cases/users/create-user/create-user.use-case';
import { DeleteUserUseCase } from 'src/application/use-cases/users/delete-user/delete-user.use-case';
import { UpdateUserUseCase } from 'src/application/use-cases/users/update-user/update-user.use-case';
import { CreateUserController } from '../controllers/user/create/create-user.controller';
import { UpdateUserController } from '../controllers/user/update/update-user.controller';
import { DeleteUserController } from '../controllers/user/delete/delete-user.controller';
import { TypeORMUserRepository } from '../typeorm/repositories/user-repository.typeorm';
import { IUserRepository } from 'src/domain/interfaces/user/user.interface';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../typeorm/entities/user-entity.typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [
    CreateUserController,
    UpdateUserController,
    DeleteUserController,
  ],
  providers: [
    CreateUserUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
    {
      provide: IUserRepository,
      useClass: TypeORMUserRepository,
    },
  ],
})
export class UserModule {}

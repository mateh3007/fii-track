import { IUserRepository } from 'src/domain/interfaces/user/user.interface';
import { ConflictException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserEntity } from 'src/domain/entities/user/user.entity';
import { CreateUserUseCase } from './create-user.use-case';

describe('CreateUserUseCase', () => {
  let createUserUseCase: CreateUserUseCase;
  let userRepositoryMock: jest.Mocked<IUserRepository>;

  beforeEach(async () => {
    userRepositoryMock = {
      findByEmail: jest.fn(),
      save: jest.fn(),
    } as unknown as jest.Mocked<IUserRepository>;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserUseCase,
        { provide: IUserRepository, useValue: userRepositoryMock },
      ],
    }).compile();

    createUserUseCase = module.get<CreateUserUseCase>(CreateUserUseCase);
  });

  it('deve lançar ConflictException se o usuário já existe', async () => {
    const createUserDto: CreateUserDto = {
      email: 'existing@test.com',
      password: '123456',
      name: 'Existing User',
    };

    userRepositoryMock.findByEmail.mockResolvedValue(
      new UserEntity(createUserDto),
    );

    await expect(createUserUseCase.handle(createUserDto)).rejects.toThrow(
      ConflictException,
    );
    expect(userRepositoryMock.findByEmail).toHaveBeenCalledWith(
      'existing@test.com',
    );
  });
});

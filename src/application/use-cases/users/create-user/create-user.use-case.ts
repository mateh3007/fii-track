import { ConflictException, Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/domain/interfaces/user/user.interface';
import { CreatedUserDto, CreateUserDto } from '../dtos/create-user.dto';
import { UserEntity } from 'src/domain/entities/user/user.entity';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async handle(createUserDto: CreateUserDto): Promise<CreatedUserDto> {
    const userAlreadyExists = await this.userRepository.findByEmail(
      createUserDto.email,
    );
    if (userAlreadyExists) throw new ConflictException('User already exists');
    const userEntity = new UserEntity(createUserDto);
    const user = await this.userRepository.save(userEntity);
    return user;
  }
}

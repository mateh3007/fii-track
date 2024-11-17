import { ConflictException, Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/domain/interfaces/user/user.interface';
import { CreatedUserDto, CreateUserDto } from '../dtos/create-user.dto';
import { UserEntity } from 'src/domain/entities/user/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async handle(createUserDto: CreateUserDto): Promise<CreatedUserDto> {
    const userAlreadyExists = await this.userRepository.findByEmail(
      createUserDto.email,
    );
    if (userAlreadyExists) throw new ConflictException('User already exists');
    const userProps = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };
    const userEntity = new UserEntity(userProps);
    const user = await this.userRepository.save(userEntity);
    return user;
  }
}

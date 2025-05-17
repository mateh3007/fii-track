import { Injectable, NotFoundException } from '@nestjs/common';
import { IUserRepository } from 'src/domain/interfaces/user/user.interface';
import { UpdateUserDto } from '../dtos/update-user.dto';
import * as bcrypt from 'bcrypt';
import { UserEntity } from 'src/domain/entities/user/user.entity';

@Injectable()
export class UpdateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async handle(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const userAlreadyExists = await this.userRepository.findById(id);

    if (!userAlreadyExists) throw new NotFoundException('User not found');
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    return await this.userRepository.update(userAlreadyExists.id, {
      ...updateUserDto,
    });
  }
}

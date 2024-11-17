import { Injectable, NotFoundException } from '@nestjs/common';
import { IUserRepository } from 'src/domain/interfaces/user/user.interface';

@Injectable()
export class DeleteUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async handle(id: number): Promise<void> {
    const userAlreadyExists = await this.userRepository.findById(id);

    if (!userAlreadyExists) {
      throw new NotFoundException('Company not found');
    }

    return await this.userRepository.delete(userAlreadyExists.id);
  }
}

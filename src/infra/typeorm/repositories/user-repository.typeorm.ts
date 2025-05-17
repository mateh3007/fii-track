import { Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/domain/interfaces/user/user.interface';
import { Repository } from 'typeorm';
import { User } from '../entities/user-entity.typeorm';
import { UserEntity } from 'src/domain/entities/user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TypeORMUserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly ormRepository: Repository<User>,
  ) {}

  async delete(id: number): Promise<void> {
    const user = await this.ormRepository.findOne({
      where: {
        id,
      },
    });
    await this.ormRepository.delete(user.id);
  }

  async find(): Promise<UserEntity[]> {
    return await this.ormRepository.find();
  }

  async update(id: number): Promise<UserEntity> {
    const user = await this.ormRepository.findOne({ where: { id } });
    await this.ormRepository.update(user.id, {});
    return user;
  }

  async findById(id: number): Promise<UserEntity> {
    const userEntity = await this.ormRepository.findOne({ where: { id } });
    return userEntity;
  }

  async findByEmail(email: string): Promise<UserEntity> {
    const userEntity = await this.ormRepository.findOne({ where: { email } });
    return userEntity;
  }

  async save(user: UserEntity): Promise<UserEntity> {
    const userEntity = this.ormRepository.create({
      name: user.name,
      email: user.email,
      password: user.password,
    });
    return await this.ormRepository.save(userEntity);
  }
}

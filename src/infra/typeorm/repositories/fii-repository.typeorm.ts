import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IFiiRepository } from 'src/domain/interfaces/fii/fii.interface';
import { FiiEntity } from 'src/domain/entities/fii/fii.entity';
import { FII } from '../entities/fii-entity.typeorm';

@Injectable()
export class TypeORMFiiRepository implements IFiiRepository {
  constructor(private readonly ormRepository: Repository<FII>) {}

  async delete(id: number): Promise<void> {
    const user = await this.ormRepository.findOne({
      where: {
        id,
      },
    });
    await this.ormRepository.delete(user.id);
  }

  async find(): Promise<FiiEntity[]> {
    return await this.ormRepository.find();
  }

  async update(id: number): Promise<FiiEntity> {
    const fii = await this.ormRepository.findOne({ where: { id } });
    await this.ormRepository.update(fii.id, {});
    return fii;
  }

  async findById(id: number): Promise<FiiEntity> {
    const userEntity = await this.ormRepository.findOne({ where: { id } });
    return userEntity;
  }

  async save(fii: FiiEntity): Promise<FiiEntity> {
    return await this.ormRepository.save(fii);
  }
}

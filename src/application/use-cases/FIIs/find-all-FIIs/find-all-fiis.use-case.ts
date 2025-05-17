import { Injectable } from '@nestjs/common';
import { IFiiRepository } from 'src/domain/interfaces/fii/fii.interface';
import { FindAllFIIsDto } from '../dtos/find-all-fiis.dto';

@Injectable()
export class FindAllFIIsUseCase {
  constructor(private readonly fiiRepository: IFiiRepository) {}

  public async handle(): Promise<FindAllFIIsDto[]> {
    const users = await this.fiiRepository.find();

    return users.map((users) => {
      return FindAllFIIsDto.toDto(users);
    });
  }
}

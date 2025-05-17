import { Injectable, NotFoundException } from '@nestjs/common';
import { IFiiRepository } from 'src/domain/interfaces/fii/fii.interface';
import { FindFiiByIdDto } from '../dtos/find-fii-by-id.dto';

@Injectable()
export class FindFiiByIdUseCase {
  constructor(private readonly fiiRepository: IFiiRepository) {}

  public async handle(id: number): Promise<FindFiiByIdDto> {
    const fii = await this.fiiRepository.findById(id);

    if (!fii) {
      throw new NotFoundException('User not found');
    }

    return FindFiiByIdDto.toDto(fii);
  }
}

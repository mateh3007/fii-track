import { BadRequestException, Injectable } from '@nestjs/common';
import { IAlphaVantageRequest } from 'src/application/interfaces/external-requests/alpha-vantage.interface';
import { IFiiRepository } from 'src/domain/interfaces/fii/fii.interface';
import { CreateFiiDto } from '../dtos/create-fii.dto';
import { FiiEntity } from 'src/domain/entities/fii/fii.entity';
import { CreatedFiiDto } from '../dtos/created-fii.dto';

@Injectable()
export class CreateFiiUseCase {
  constructor(
    private readonly fiiRepository: IFiiRepository,
    private readonly alphaVantageRequest: IAlphaVantageRequest,
  ) {}

  async handle(createFiiDto: CreateFiiDto): Promise<CreatedFiiDto> {
    const fiiExists = await this.alphaVantageRequest.alphaVantage(
      createFiiDto.name,
    );
    if (!fiiExists) throw new BadRequestException('This fii not exists');
    const fii = new FiiEntity(createFiiDto);
    return await this.fiiRepository.save(fii);
  }
}

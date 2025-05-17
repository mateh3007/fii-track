import { PickType } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { CreatedFiiDto } from './created-fii.dto';

export class FindAllFIIsDto extends PickType(CreatedFiiDto, [
  'id',
  'name',
  'createdAt',
  'updatedAt',
  'deletedAt',
]) {
  static toDto(data: any): FindAllFIIsDto {
    return plainToInstance(FindAllFIIsDto, data, {
      excludeExtraneousValues: true,
    });
  }
}

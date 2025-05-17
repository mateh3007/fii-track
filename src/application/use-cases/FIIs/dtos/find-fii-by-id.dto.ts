import { PickType } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { CreatedFiiDto } from './created-fii.dto';

export class FindFiiByIdDto extends PickType(CreatedFiiDto, [
  'id',
  'name',
  'numberOfShares',
  'userId',
  'createdAt',
  'updatedAt',
  'deletedAt',
]) {
  static toDto(data: any): FindFiiByIdDto {
    return plainToInstance(FindFiiByIdDto, data, {
      excludeExtraneousValues: true,
    });
  }
}

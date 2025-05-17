import { ApiProperty, PickType } from '@nestjs/swagger';
import { Expose, plainToInstance } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';
import { CreateFiiDto } from './create-fii.dto';
import { FiiEntity } from 'src/domain/entities/fii/fii.entity';

export class CreatedFiiDto extends PickType(CreateFiiDto, [
  'initialPurchaseValue',
  'name',
  'numberOfShares',
  'userId',
]) {
  @Expose()
  @ApiProperty({
    description: 'The id of the FII.',
    example: 1,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @Expose()
  @ApiProperty({
    description: 'The created date of the FII.',
    example: '2022-01-01 15:00:00',
    required: true,
  })
  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  @Expose()
  @ApiProperty({
    description: 'The updated date of the FII.',
    example: '2022-01-01 15:00:00',
    required: true,
  })
  @IsDate()
  @IsNotEmpty()
  updatedAt: Date;

  @Expose()
  @ApiProperty({
    description: 'The deleted date of the FII.',
    example: null,
    required: false,
  })
  @IsDate()
  @IsNotEmpty()
  deletedAt: Date;

  static toDto(fii: FiiEntity): CreatedFiiDto {
    return plainToInstance(CreatedFiiDto, fii, {
      excludeExtraneousValues: true,
    });
  }
}

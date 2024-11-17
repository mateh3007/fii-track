import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateFiiDto {
  @Expose()
  @ApiProperty({
    description: 'The name of FII',
    example: 'MXRF11',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @Expose()
  @ApiProperty({
    description: 'The initial purchase value of the FII.',
    example: 100,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  initialPurchaseValue: number;

  @Expose()
  @ApiProperty({
    description: 'The number of shares purchased of the FII.',
    example: 5,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  numberOfShares: number;

  @Expose()
  @ApiProperty({
    description: 'The user id who purchased the FII.',
    example: 5,
    required: true,
  })
  @IsOptional()
  @IsNumber()
  userId?: number;
}

export type CreatedFiiDto = {
  name: string;
  initialPurchaseValue: number;
  numberOfShares: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};

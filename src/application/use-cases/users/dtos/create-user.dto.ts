import { ApiProperty, PickType } from '@nestjs/swagger';
import { Expose, plainToInstance } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { UserEntity } from 'src/domain/entities/user/user.entity';

export class CreateUserDto {
  @Expose()
  @ApiProperty({ description: 'The name of User' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @Expose()
  @ApiProperty({ description: 'The email of User' })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @Expose()
  @ApiProperty({ description: 'The email of User' })
  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  password: string;
}

export class CreatedUserDto extends PickType(CreateUserDto, ['email', 'name']) {
  @Expose()
  @ApiProperty({
    description: 'The id of the User.',
    example: 1,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  id?: number;

  @Expose()
  @ApiProperty({
    description: 'The created date of the User.',
    example: '2022-01-01 15:00:00',
    required: true,
  })
  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  @Expose()
  @ApiProperty({
    description: 'The updated date of the User.',
    example: '2022-01-01 15:00:00',
    required: true,
  })
  @IsDate()
  @IsNotEmpty()
  updatedAt: Date;

  @Expose()
  @ApiProperty({
    description: 'The deleted date of the User.',
    example: null,
    required: false,
  })
  @IsDate()
  @IsNotEmpty()
  deletedAt: Date;

  static toDto(user: UserEntity): CreatedUserDto {
    return plainToInstance(CreatedUserDto, user, {
      excludeExtraneousValues: true,
    });
  }
}

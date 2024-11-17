import { ApiProperty } from '@nestjs/swagger';
import { Expose, plainToInstance } from 'class-transformer';
import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export class LoginDto {
  @Expose()
  @ApiProperty({
    description: 'The e-mail should is valid',
    example: 'email@mail.com.br',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Expose()
  @ApiProperty({
    description: 'The password should is valid',
    example: '12345678',
    required: true,
  })
  @IsNotEmpty()
  @MinLength(8)
  @IsAlphanumeric()
  password: string;

  static toDto(data: any): LoginDto {
    return plainToInstance(LoginDto, data, {
      excludeExtraneousValues: true,
    });
  }
}

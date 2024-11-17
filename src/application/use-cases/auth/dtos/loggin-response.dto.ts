import { ApiProperty } from '@nestjs/swagger';
import { Expose, plainToInstance } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginResponseDto {
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
  @IsString()
  @IsNotEmpty()
  password: string;

  static toDto(data: any): LoginResponseDto {
    return plainToInstance(LoginResponseDto, data, {
      excludeExtraneousValues: true,
    });
  }
}

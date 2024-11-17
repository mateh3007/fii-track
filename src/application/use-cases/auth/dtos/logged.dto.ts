import { ApiProperty } from '@nestjs/swagger';
import { Expose, plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoggedDto {
  @Expose()
  @ApiProperty({
    description: 'The token JWT should is valid',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoicmVpc3RyODVAZ21haWwuY29tIiwibmFtZSI6IlJlbmFuIFJlaXMiLCJpYXQiOjE2Nzg5MzA1NzAsImV4cCI6MTY3OTAxNjk3MH0.0A38Z1HUn8jYLK8Tb9RbH1MqldPGIcv7CdAu8UO6lZE',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  token: string;

  @Expose()
  @ApiProperty({
    description: 'The User should is valid',
    example: '',
    required: true,
  })
  user: any;

  static toDto(data: any): LoggedDto {
    return plainToInstance(
      LoggedDto,
      {
        ...data,
        user: {
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          createdAt: data.user.createdAt,
          updatedAt: data.user.updatedAt,
          company: {
            ...data.user.company,
          },
        },
      },
      {
        excludeExtraneousValues: true,
      },
    );
  }
}

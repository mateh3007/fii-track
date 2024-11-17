import { PickType, ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString, IsOptional, MinLength } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PickType(CreateUserDto, ['name', 'email']) {
  @Expose()
  @ApiProperty()
  @IsString()
  @IsOptional()
  @MinLength(8)
  password;
}

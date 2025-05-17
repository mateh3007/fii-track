import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserUseCase } from 'src/application/use-cases/users/create-user/create-user.use-case';
import {
  CreatedUserDto,
  CreateUserDto,
} from 'src/application/use-cases/users/dtos/create-user.dto';

@ApiTags('User')
@Controller('users')
export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  @ApiOperation({
    summary: 'Create User',
    description: 'Create User',
  })
  @ApiOkResponse({
    type: CreatedUserDto,
  })
  @ApiBody({ type: CreateUserDto })
  @HttpCode(HttpStatus.CREATED)
  async execute(@Body() body: CreateUserDto): Promise<CreatedUserDto> {
    return await this.createUserUseCase.handle(body);
  }
}

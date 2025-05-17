import {
  Controller,
  Put,
  HttpStatus,
  HttpCode,
  Param,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { UpdateUserDto } from 'src/application/use-cases/users/dtos/update-user.dto';
import { UpdateUserUseCase } from 'src/application/use-cases/users/update-user/update-user.use-case';

@ApiTags('User')
@Controller('users')
export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  @Put(':id')
  @ApiOperation({
    summary: 'Update User',
    description: 'Update User',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'The user Id',
  })
  @ApiBody({ type: UpdateUserDto })
  @HttpCode(HttpStatus.NO_CONTENT)
  async handle(
    @Param('id', ParseUUIDPipe) id: number,
    @Body() body: UpdateUserDto,
  ): Promise<void> {
    await this.updateUserUseCase.handle(id, body);
  }
}

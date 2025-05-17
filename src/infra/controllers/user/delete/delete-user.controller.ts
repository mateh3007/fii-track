import { Controller, Delete, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { DeleteUserUseCase } from 'src/application/use-cases/users/delete-user/delete-user.use-case';

@ApiTags('User')
@Controller('users')
export class DeleteUserController {
  constructor(private readonly deleteUserUseCase: DeleteUserUseCase) {}

  @Delete()
  @ApiOperation({
    summary: 'Delete User',
    description: 'Delete User',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'The user Id',
  })
  async execute(@Param('id') id: number): Promise<void> {
    return await this.deleteUserUseCase.handle(id);
  }
}

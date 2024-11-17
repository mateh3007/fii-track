import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse, ApiBody } from '@nestjs/swagger';
import { AuthService } from 'src/application/use-cases/auth/auth.use-case';
import { LoggedDto } from 'src/application/use-cases/auth/dtos/logged.dto';
import { LoginDto } from 'src/application/use-cases/auth/dtos/loggin.dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({
    summary: 'Login',
    description: 'Login',
  })
  @ApiOkResponse({
    type: LoggedDto,
  })
  @ApiBody({ type: LoginDto })
  handle(@Body() payload: LoginDto): Promise<LoggedDto> {
    return this.authService.handle(payload);
  }
}

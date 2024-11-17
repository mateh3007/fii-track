import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoggedDto } from './dtos/logged.dto';
import { IUserRepository } from 'src/domain/interfaces/user/user.interface';
import { LoginDto } from './dtos/loggin.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: IUserRepository,
  ) {}
  async handle({ email, password }: LoginDto): Promise<LoggedDto> {
    const user = await this.userRepository.findByEmail(email);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        const payload = {
          sub: user.id,
          email: user.email,
          name: user.name,
        };

        return LoggedDto.toDto({
          token: this.jwtService.sign(payload),
          user,
        });
      }
    }

    throw new UnauthorizedException('E-mail or password incorrect.');
  }
}

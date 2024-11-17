import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IUserRepository } from 'src/domain/interfaces/user/user.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'JwtStrategy') {
  constructor(private readonly userRepository: IUserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload) {
    const id = payload.sub;
    const user = await this.userRepository.findById(id);

    delete user.password;
    return { ...user };
  }
}

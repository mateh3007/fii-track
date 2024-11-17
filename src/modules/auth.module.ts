import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from 'src/application/use-cases/auth/auth.use-case';
import { JwtStrategy } from 'src/application/use-cases/auth/strategies/jwt.strategy';
import { IUserRepository } from 'src/domain/interfaces/user/user.interface';
import { AuthController } from 'src/infra/controllers/auth/auth.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [JwtStrategy, AuthService],
})
export class AuthModule {}

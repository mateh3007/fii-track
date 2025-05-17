import { UpdateUserDto } from 'src/application/use-cases/users/dtos/update-user.dto';
import { UserEntity } from 'src/domain/entities/user/user.entity';

export abstract class IUserRepository {
  abstract save(userEntity: UserEntity): Promise<UserEntity>;
  abstract find(): Promise<UserEntity[]>;
  abstract findByEmail(email: string): Promise<UserEntity>;
  abstract findById(id: number): Promise<UserEntity>;
  abstract update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UserEntity>;
  abstract delete(id: number): Promise<void>;
}

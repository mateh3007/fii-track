import { UserEntity } from 'src/domain/entities/user/user.entity';

export abstract class IUserRepository {
  abstract save(userEntity: UserEntity): Promise<UserEntity>;
  abstract find(): Promise<UserEntity>;
  abstract findByEmail(email: string): Promise<UserEntity>;
  abstract update(data: any): Promise<UserEntity>;
  abstract delete(data: any): Promise<void>;
}

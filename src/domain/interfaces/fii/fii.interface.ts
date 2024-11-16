import { FiiEntity } from 'src/domain/entities/fii/fii.entity';

export abstract class IFiiRepository {
  abstract save(userEntity: FiiEntity): Promise<FiiEntity>;
  abstract find(): Promise<FiiEntity[]>;
  abstract findById(email: string): Promise<FiiEntity | null>;
  abstract update(data: any): Promise<FiiEntity>;
  abstract delete(data: any): Promise<void>;
}

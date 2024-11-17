import { BaseEntity } from 'src/shared/base-classes/base-entity';

type FiiProps = {
  name: string;
  initialPurchaseValue: number;
  numberOfShares: number;
  userId?: number;
};

export class FiiEntity extends BaseEntity {
  name: string;
  initialPurchaseValue: number;
  numberOfShares: number;
  userId: number;

  constructor(fiiProps: FiiProps) {
    super();
    this.name = fiiProps.name;
    this.initialPurchaseValue = fiiProps.initialPurchaseValue;
    this.numberOfShares = fiiProps.numberOfShares;
    this.userId = fiiProps.userId;
    this.isActive = true;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.deletedAt = undefined;
  }
}

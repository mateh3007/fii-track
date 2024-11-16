import { BaseEntity } from 'src/shared/base-classes/base-entity';

type UserProps = {
  name: string;
  email: string;
  password: string;
  companyId: string;
};

export class UserEntity extends BaseEntity {
  name: string;
  email: string;
  password: string;
  companyId: string;

  constructor(userProps: UserProps) {
    super();
    this.name = userProps.name;
    this.email = userProps.email;
    this.password = userProps.password;
    this.companyId = userProps.companyId;
    this.isActive = true;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.deletedAt = undefined;
  }
}

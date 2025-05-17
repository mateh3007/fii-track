import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseOrmEntity } from './base-entity.typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user-entity.typeorm';

@Entity('FIIs')
export class FII extends BaseOrmEntity {
  @ApiProperty()
  @Column({ length: 150, nullable: false })
  name: string;

  @ApiProperty()
  @Column({ nullable: false })
  initialPurchaseValue: number;

  @ApiProperty()
  @Column({ nullable: false })
  numberOfShares: number;

  @ApiProperty()
  @Column()
  userId: number;

  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  @ManyToOne(() => User, (user) => user.fii)
  user: User;
}

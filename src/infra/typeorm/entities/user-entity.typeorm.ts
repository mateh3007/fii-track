import {
  Entity,
  Column,
  DeleteDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseOrmEntity } from './base-entity.typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { FII } from './fii-entity.typeorm';

@Entity('Users')
export class User extends BaseOrmEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({ readOnly: true })
  id: number;

  @ApiProperty()
  @Column({ length: 150 })
  name: string;

  @ApiProperty()
  @Column({ length: 150 })
  email: string;

  @ApiProperty()
  @Column({ nullable: false })
  password: string;

  @ApiProperty()
  @Column({ default: true })
  isActive: boolean;

  @ApiProperty({ readOnly: true })
  @Column({ nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ApiProperty({ readOnly: true })
  @Column({
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @ApiProperty({ readOnly: true })
  @DeleteDateColumn({ nullable: true })
  deletedAt: Date;

  @OneToMany(() => FII, (fii) => fii.userId)
  fii: FII[];
}

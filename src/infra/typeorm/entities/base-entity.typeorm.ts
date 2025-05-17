import { Column, DeleteDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export abstract class BaseOrmEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({ readOnly: true })
  id: number;

  @Column({ default: true })
  @ApiProperty({ readOnly: true })
  isActive: boolean;

  @Column({ nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  @ApiProperty({ readOnly: true })
  createdAt: Date;

  @Column({
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  @ApiProperty({ readOnly: true })
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  @Exclude()
  deletedAt: Date;
}

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class SmallBanner extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: number;

  @Column({ type: String })
  image!: string;

  @Column({ default: false, type: Boolean })
  status!: boolean;

  @CreateDateColumn({ type: Date })
  createdAt!: Date;

  @UpdateDateColumn({ type: Date })
  updatedAt!: Date;
}

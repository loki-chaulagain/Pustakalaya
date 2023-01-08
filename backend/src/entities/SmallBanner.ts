import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn } from "typeorm";

@Entity()
export class SmallBanner extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: String })
  image!: string;

  @Column()
  status!: string;

  @CreateDateColumn({ type: Date })
  createdAt!: Date;
}

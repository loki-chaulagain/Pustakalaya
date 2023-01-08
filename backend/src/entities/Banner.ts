import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn } from "typeorm";

@Entity()
export class Banner extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: Number })
  categoryId!: number;

  @Column({ type: String })
  image!: string;

  @Column()
  status!: string;

  @CreateDateColumn({ type: Date })
  createdAt!: Date;
}

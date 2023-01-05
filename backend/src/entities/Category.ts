import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: String })
  name!: string;

  @Column({ type: String })
  description!: string;

  @Column({ type: String })
  image!: string;

  @CreateDateColumn({ type: Date })
  createdAt!: Date;

  @UpdateDateColumn({ type: Date })
  updatedAt!: Date;
}

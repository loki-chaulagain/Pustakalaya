import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn } from "typeorm";

@Entity()
export class Subscriber extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: String })
  email!: string;

  @CreateDateColumn()
  createdAt!: Date;
}

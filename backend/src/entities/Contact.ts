import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Contact extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: String })
  name!: string;

  @Column({ type: String })
  email!: string;

  @Column({ type: String })
  phone!: string;

  @Column({ type: String })
  message!: string;

  @CreateDateColumn({ type: Date })
  createdAt!: Date;
}

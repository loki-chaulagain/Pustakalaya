import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn,  } from "typeorm";

@Entity()
export class Banner extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: String })
  title!: string;

  @Column({ type: String })
  description!: string;

  @Column({ type: Number })
  categoryId!: number;

  @Column({ type: String })
  image!: string;

  @Column({ default: false, type: Boolean })
  status!: boolean;

  @CreateDateColumn({ type: Date })
  createdAt!: Date;
}

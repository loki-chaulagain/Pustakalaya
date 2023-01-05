import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Banner extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: String })
  name!: string;

  @Column({ type: String })
  description!: string;

  @Column({ type: Number })
  categoryId!: number;

  @Column({ type: Number })
  priceNow!: number;

  @Column({ type: Number })
  pricePrevious!: number;

  @Column({ type: String })
  image!: string;

  @Column({ default: false, type: Boolean })
  status!: boolean;

  @CreateDateColumn({ type: Date })
  createdAt!: Date;

  @UpdateDateColumn({ type: Date })
  updatedAt!: Date;
}

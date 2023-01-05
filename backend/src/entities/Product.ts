import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product extends BaseEntity {
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
  isActive!: boolean;

  @Column({ default: false, type: Boolean })
  isBestSeller!: boolean;

  @Column({ default: false, type: Boolean })
  isFeatured!: boolean;

  @Column({ default: false, type: Boolean })
  isHotSale!: boolean;

  @Column({ default: false, type: Boolean })
  isOutOfStock!: boolean;

  @CreateDateColumn({ type: Date })
  createdAt!: Date;
}

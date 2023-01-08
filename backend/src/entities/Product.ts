import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: String })
  name!: string;

  @Column({ type: String })
  description!: string;

  @Column({ type: String })
  author!: string;

  @Column({ type: String })
  publishedYear!: string;

  @Column({ type: Number })
  categoryId!: number;

  @Column({ type: Number })
  priceNow!: number;

  @Column({ type: Number })
  pricePrevious!: number;

  @Column({ type: String })
  image!: string;

  @Column()
  isMostSelling!: string;

  @Column()
  isFeatured!: string;

  @Column()
  isLatestProduct!: string;

  @Column()
  isHotSale!: string;

  @CreateDateColumn({ type: Date })
  createdAt!: Date;
}

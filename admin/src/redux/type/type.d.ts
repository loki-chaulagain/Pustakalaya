export interface Banner {
  id: number;
  productName: string;
  productDescription: string;
  categoryId: number;
  priceNow: number;
  pricePrevious: number;
  image: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface SmallBanner {
  id: string;
  image: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Subscriber {
  email: string;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: Date;
}

export interface Color {
  id: number;
  name: string;
}

export interface Size {
  id: number;
  name: string;
}

export interface Review {
  id: number;
  name: string;
  description: description;
  createdAt: Date;
}

export interface Product {
  id: number;
  name: string;
  description: description;
  image: string;
  categoryId: 2;
  priceNow: 22;
  pricePrevious: 44;
  isActive: boolean;
  isBestSeller: boolean;
  isFeatured: boolean;
  isHotSale: boolean;
  isOutOfStock: boolean;
  createdAt: Date;
}

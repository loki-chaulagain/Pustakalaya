import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Product } from "../entities/Product";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const results = await AppDataSource.manager.find(Product, { take: 5 });
    return res.status(200).json(results);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  const id: any = req.query.id;
  try {
    const result = await AppDataSource.getRepository(Product).findOneBy(id);
    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = AppDataSource.getRepository(Product).create(req.body);
    const results = await AppDataSource.getRepository(Product).save(newProduct);
    return res.status(201).json(results);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const id: any = req.query.id;
  try {
    const updatedProduct: any = await AppDataSource.getRepository(Product).findOneBy(id);
    AppDataSource.getRepository(Product).merge(updatedProduct, req.body);
    const result = await AppDataSource.getRepository(Product).save(updatedProduct);
    return res.status(201).json(result);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const deletedProduct = await AppDataSource.getRepository(Product).delete(req.params.id);
    return res.status(200).json(deletedProduct);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Category } from "../entities/Category";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const results = await AppDataSource.manager.find(Category);
    return res.status(200).json(results);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCategory = async (req: Request, res: Response) => {
  const id: any = req.query.id;
  try {
    const result = await AppDataSource.manager.findOneBy(Category, id);
    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = AppDataSource.manager.create(Category, req.body);
    const results = await AppDataSource.manager.save(Category, category);
    return res.status(201).json(results);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  const id: any = req.query.id;
  try {
    const category: any = await AppDataSource.manager.findOneBy(Category, id);
    AppDataSource.manager.merge(Category, category, req.body);
    const result = await AppDataSource.manager.save(Category, category);
    return res.status(201).json(result);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const category = await AppDataSource.manager.delete(Category, req.params.id);
    return res.status(200).json(category);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

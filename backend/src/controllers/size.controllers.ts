import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Size } from "../entities/Size";

export const getSizes = async (req: Request, res: Response) => {
  try {
    const results = await AppDataSource.manager.find(Size);
    return res.status(200).json(results);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const createSize = async (req: Request, res: Response) => {
  try {
    const size = AppDataSource.manager.create(Size, req.body);
    const results = await AppDataSource.manager.save(Size, size);
    return res.status(201).json(results);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteSize = async (req: Request, res: Response) => {
  try {
    const size = await AppDataSource.manager.delete(Size, req.params.id);
    return res.status(200).json(size);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

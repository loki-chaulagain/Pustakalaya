import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Color } from "../entities/Color";

export const getColors = async (req: Request, res: Response) => {
  try {
    const results = await AppDataSource.manager.find(Color);
    return res.status(200).json(results);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const createColor = async (req: Request, res: Response) => {
  try {
    const color = AppDataSource.manager.create(Color, req.body);
    const results = await AppDataSource.manager.save(Color, color);
    return res.status(201).json(results);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteColor = async (req: Request, res: Response) => {
  try {
    const color = await AppDataSource.manager.delete(Color, req.params.id);
    return res.status(200).json(color);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

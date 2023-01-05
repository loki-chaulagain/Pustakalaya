import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Review } from "../entities/Review";

export const getReviews = async (req: Request, res: Response) => {
  try {
    const results = await AppDataSource.manager.find(Review,{take:5});
    return res.status(200).json(results);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getReview = async (req: Request, res: Response) => {
  const id: any = req.query.id;
  try {
    const result = await AppDataSource.manager.findOneBy(Review, id);
    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const createReview = async (req: Request, res: Response) => {
  try {
    const review = AppDataSource.manager.create(Review, req.body);
    const results = await AppDataSource.manager.save(Review, review);
    return res.status(201).json(results);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteReview = async (req: Request, res: Response) => {
  try {
    const review = await AppDataSource.manager.delete(Review, req.params.id);
    return res.status(200).json(review);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { SmallBanner } from "../entities/SmallBanner";

export const getSmallBanners = async (req: Request, res: Response) => {
  try {
    const smallBanners = await AppDataSource.manager.find(SmallBanner,{take:5});
    return res.status(200).json(smallBanners);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getSmallBanner = async (req: Request, res: Response) => {
  const id: any = req.query.id;
  try {
    const smallBanner = await AppDataSource.manager.findOneBy(SmallBanner, id);
    return res.status(200).json(smallBanner);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const createSmallBanner = async (req: Request, res: Response) => {
  try {
    const smallBanner = AppDataSource.manager.create(SmallBanner, req.body);
    const results = await AppDataSource.manager.save(SmallBanner, smallBanner);
    return res.status(201).json(results);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateSmallBanner = async (req: Request, res: Response) => {
  const id: any = req.query.id;
  try {
    const smallBanner: any = await AppDataSource.manager.findOneBy(SmallBanner, id);
    AppDataSource.manager.merge(SmallBanner, smallBanner, req.body);
    const result = await AppDataSource.manager.save(SmallBanner, smallBanner);
    return res.status(201).json(result);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteSmallBanner = async (req: Request, res: Response) => {
  try {
    const smallBanner = await AppDataSource.manager.delete(SmallBanner, req.params.id);
    return res.status(200).json(smallBanner);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

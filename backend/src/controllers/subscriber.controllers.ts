import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Subscriber } from "../entities/Subscriber";
import nodemailer from "nodemailer";

export const getSubscribers = async (req: Request, res: Response) => {
  const page: any = req.query.page || 1;
  const size: any = req.query.size || 5;
  const skip = (page - 1) * size;
  console.log({ page, size, skip });

  try {
    const subscriberCount = await AppDataSource.manager.count(Subscriber);
    const subscribers = await AppDataSource.manager.find(Subscriber, { take: size, skip: skip });
    return res.status(200).json({subscribers, subscriberCount});
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const createSubscriber = async (req: Request, res: Response) => {
  try {
    async function sendEmail() {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: "lokendrachaulagain803@gmail.com",
          pass: "keodnnbwcunkxqmi",
        },
      });

      let info = await transporter.sendMail({
        from: "Book Store",
        to: "lokendrachaulagain803@gmail.com",
        subject: "Subscribed Book Store",
        html: `<b>Email : ${req.body.email}</b>`,
      });
      console.log("Message sent Success");
    }
    sendEmail().catch(console.error);

    const subscriber = AppDataSource.manager.create(Subscriber, req.body);
    const results = await AppDataSource.manager.save(Subscriber, subscriber);

    return res.status(201).json(results);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteSubscriber = async (req: Request, res: Response) => {
  try {
    const subscriber = await AppDataSource.manager.delete(Subscriber, req.params.id);
    return res.status(200).json(subscriber);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

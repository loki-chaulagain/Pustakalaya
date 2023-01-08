import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Contact } from "../entities/Contact";
import nodemailer from "nodemailer";

export const getContacts = async (req: Request, res: Response) => {
  try {
    const results = await AppDataSource.manager.find(Contact, { take: 5 });
    return res.status(200).json(results);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getContact = async (req: Request, res: Response) => {
  const id: any = req.query.id;
  try {
    const result = await AppDataSource.getRepository(Contact).findOneBy(id);
    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const createContact = async (req: Request, res: Response) => {
  try {
    async function main() {
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
        subject: "Message From Book Store",
        html: `
           <p>NAme : ${req.body.name}</p>
           <p>Email : ${req.body.email}</p>
           <p>Phone : ${req.body.phone}</p>
           <p>Message : ${req.body.message}</p>`,
      });
      console.log("Message Sent");
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
    main().catch(console.error);

    const newContact = AppDataSource.getRepository(Contact).create(req.body);
    const results = await AppDataSource.getRepository(Contact).save(newContact);
    return res.status(201).json(results);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateContact = async (req: Request, res: Response) => {
  const id: any = req.query.id;
  try {
    const updatedContact: any = await AppDataSource.getRepository(Contact).findOneBy(id);
    AppDataSource.getRepository(Contact).merge(updatedContact, req.body);
    const result = await AppDataSource.getRepository(Contact).save(updatedContact);
    return res.status(201).json(result);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteContact = async (req: Request, res: Response) => {
  try {
    const deletedContact = await AppDataSource.getRepository(Contact).delete(req.params.id);
    return res.status(200).json(deletedContact);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
const app = express();

import bannerRoutes from "./routes/banner.routes";
import smallBannerRoutes from "./routes/smallBanner.routes";
import categoryRoutes from "./routes/category.routes";
import productRoute from "./routes/product.routes";
import contactRoutes from "./routes/contact.routes";
import colorRoutes from "./routes/color.routes";
import sizeRoutes from "./routes/size.routes";
import subscriberRoute from "./routes/subscriber.routes";

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/api", (req: Request, res: Response) => {
  res.status(200).json("Getting Response From Server");
});

app.use("/api/banner", bannerRoutes);
app.use("/api/smallBanner", smallBannerRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoute);
app.use("/api/contact", contactRoutes);
app.use("/api/color", colorRoutes);
app.use("/api/size", sizeRoutes);
app.use("/api/subscriber", subscriberRoute);

export default app;

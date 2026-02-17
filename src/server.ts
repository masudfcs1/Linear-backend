import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import rootRouter from "./api/routes/index";
import prisma from "./config/prismadatabase";
import globalErrorHandler from "./middleware/errors/globalErrorHandler";

dotenv.config();

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api/v1", rootRouter);

app.get("/api", (req: Request, res: Response, next: NextFunction) => {
  res.send("welcome to PrimeCode");
});

app.use(globalErrorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

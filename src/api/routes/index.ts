import { Router } from "express";

import authRouter from "../../modules/auth/auth.route";

// import other routers here

const rootRouter = Router();

rootRouter.use("/auth", authRouter);

export default rootRouter;

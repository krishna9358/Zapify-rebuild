import { Router } from "express";
import { authMiddleware } from "../middleware";

const zapRouter = Router();

//create zap
zapRouter.post("/", authMiddleware, (req, res) => { });

//get all zaps
zapRouter.get("/", authMiddleware, (req, res) => { });

// !TODO: update zap
// zapRouter.put("/", (req, res) => { });

// !TODO:delete zap
// zapRouter.delete("/", (req, res) => { });


//  get zap by id
zapRouter.get("/:zapId", authMiddleware, (req, res) => { });


export default zapRouter;
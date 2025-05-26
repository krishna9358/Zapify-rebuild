import { Router } from "express";
import { authMiddleware } from "../middleware";

const userRouter = Router();

//signup
userRouter.post("/signup", (req, res) => {

 });

//signin
userRouter.post("/signin", (req, res) => { 

});

//get user
userRouter.get("/:userId", authMiddleware, (req, res) => {


});

export default userRouter;
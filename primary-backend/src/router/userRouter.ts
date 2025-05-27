import { Router, Request, Response, RequestHandler } from "express";
import { signinSchema, signupSchema } from "../types";

import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import { authMiddleware } from "../middleware";
import prismaClient from "../db/prismaClient";

const userRouter = Router();


userRouter.post("/signup", (async (req: Request, res: Response) => {
    const body = req.body;
    const parsedData = signupSchema.safeParse(body);

    if (!parsedData.success) {
        console.log(parsedData.error);
        res.status(411).json({
            message: "Incorrect inputs"
        });
        return;
    }

    const userExists = await prismaClient.user.findFirst({
        where: {
            email: parsedData.data.email
        }
    });

    if (userExists) {
        res.status(403).json({
            message: "User already exists"
        });
        return;
    }

    await prismaClient.user.create({
        data: {
            email: parsedData.data.email,
            // TODO: Dont store passwords in plaintext, hash it
            password: parsedData.data.password,
            name: parsedData.data.name
        }
    });

    // await sendEmail();

    res.json({
        message: "Please verify your account by checking your email"
    });
}) as unknown as RequestHandler);

userRouter.post("/signin", (async (req: Request, res: Response) => {
    const body = req.body;
    const parsedData = signinSchema.safeParse(body);

    if (!parsedData.success) {
        res.status(411).json({
            message: "Incorrect inputs"
        });
        return;
    }

    const user = await prismaClient.user.findFirst({
        where: {
            email: parsedData.data.email,
            password: parsedData.data.password
        }
    });
    
    if (!user) {
        res.status(403).json({
            message: "Sorry credentials are incorrect"
        });
        return;
    }

    // sign the jwt
    const token = jwt.sign({
        id: user.id
    }, JWT_SECRET);

    res.json({
        token: token,
    });
}) as unknown as RequestHandler);

userRouter.get("/user", authMiddleware, (async (req: Request, res: Response) => {
     // TODO: Fix the type
    // @ts-ignore
    const id = req.id;
    const user = await prismaClient.user.findFirst({
        where: {
            id
        },
        select: {
            name: true,
            email: true
        }
    });
    return res.json({
        user
    });
}) as unknown as RequestHandler);

export default userRouter;
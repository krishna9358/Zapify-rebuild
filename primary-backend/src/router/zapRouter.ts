import { Request, RequestHandler, Router } from "express";
import { Response } from "express";
import { authMiddleware } from "../middleware";
import { zapCreateSchema } from "../types";
import prismaClient from "../db/prismaClient";

const zapRouter = Router();

//create zap
zapRouter.post("/", authMiddleware, (async (req, res) => {
  const body = req.body;
  // @ts-ignore
  const id = req.id;
  const parsedData = zapCreateSchema.safeParse(body);

  if (!parsedData.success) {
    return res.status(411).json({
      message: "Incorrect input",
    });
  }

 const zap = await prismaClient.$transaction(async (tx) => {
    // create zap with blank trigger id ( one to one relation)
    const zap = await tx.zap.create({
      data: {
        userId: id,
        triggerId: "",
        actions: {
          create: parsedData.data.actions.map((x, index) => ({
            actionId: x.availableActionId,
            sortingOrder: index,
          })),
        },
      },
    });

    // creation trigger
    const trigger = await tx.trigger.create({
      data: {
        triggerId: parsedData.data.availableTriggerId,
        zapId: zap.id,
      },
    });

    // update the zap with trigger id
    await tx.zap.update({
      where: {
        id: zap.id,
      },
      data: {
        triggerId: trigger.id,
      },
    });
    return zap.id;
  });


  res.status(201).json({
    message: "Zap created successfully",
    zapId: zap,
  });
  return;
}) as RequestHandler);

//get all zaps
zapRouter.get("/", authMiddleware, async (req, res) => {
  // @ts-ignore
  const id = req.id;
  const zaps = await prismaClient.zap.findMany({
    where: {
      userId: id,
    },
    include: {
      actions: {
        include: {
          type: true,
        },
      },
      trigger: {
        include: {
          type: true,
        },
      },
    },
  });
  res.json({
    zaps,
  });
});

// !TODO: update zap
// zapRouter.put("/", (req, res) => { });

// !TODO:delete zap
// zapRouter.delete("/", (req, res) => { });

//  get zap by id
zapRouter.get("/:zapId", authMiddleware, ( async (req , res)=> {
    //@ts-ignore
    const id = req.id;
    const zapId = req.params.zapId;

    const zap = await prismaClient.zap.findFirst({
        where: {
            id: zapId,
            userId: id
        },
        include: {
            actions: {
               include: {
                    type: true
               }
            },
            trigger: {
                include: {
                    type: true
                }
            }
        }
    });

    res.json({
        zap
    })

}) as RequestHandler);

export default zapRouter;

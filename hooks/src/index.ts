import { PrismaClient } from "@prisma/client";
import express from "express";

const client = new PrismaClient();

const app = express();

app.use(express.json());


app.post("/hooks/catch/:userId/:zapId", async (req, res) => {
    const userId  = req.params.userId;
    const zapId = req.params.zapId;
    const body = req.body;

    // TODO: Password Logic here
   


    // TODO: Save triggers to database
    await client.$transaction(async tx => {
      const run = await tx.zapRun.create({
          data: {
              zapId : zapId,
              metadata: body
          }
      });
       await tx.zapRunOutbox.create({
        data: {
          zapRunId: run.id,
        }  
      })
  });
    
  res.json({
    message: "Webhook received"
  })
    
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
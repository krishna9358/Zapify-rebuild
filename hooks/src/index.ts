import {PrismaClient} from "@prisma/client";
import express from "express";

const client = new PrismaClient();
const app = express();
app.use(express.json())

//password logic
app.post("/hooks/catch/:userId/:zapId", async (req, res) => {
    const user = req.params.userId;
    const zapId = req.params.zapId;

    // store a new trigeer in db 
    await client.$transaction(async tx => {
        const run = await tx.zapRun.create({
            data: {
                zapId
            }
        });

        await tx.zapRunOutbox.create({
            data:{
                zapRunId : run.id
            }
        })

    })
    res.json({
        message: "WebHook Recieved"
    })

// push it on to queue(kafka/redis)



})

app.listen(3000);
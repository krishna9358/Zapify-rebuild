import {PrismaClient} from "@prisma/client";
import express from "express";

const client = new PrismaClient();
const app = express();


//password logic
app.post("/hooks/catch/:userId/:zapId", async (req, res) => {
    const user = req.params.userId;
    const zapId = req.params.zapId;

    // store a new trigeer in db 
    await client.$transaction(async tx => {
        const run = await client.zapRun.create({
            data: {
                zapId
            }
        });

        await client.zapRunOutbox.create({
            data:{
                zapRunId : run.id
            }

        })

    })

// push it on to queue(kafka/redis)



})

app.listen(3000);
import express from "express";

const app = express();


//password logic
app.post("/hooks/catch/:userId/:zapId", (req, res) => {
    const user = req.params.userId;
    const zapId = req.params.zapId;

    // store a new trigeer in db 

    // push it on to queue(kafka/redis)
})


app.listen(3000)
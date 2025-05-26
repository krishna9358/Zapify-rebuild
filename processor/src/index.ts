import { PrismaClient } from "@prisma/client";
import { Kafka } from "kafkajs";

const client = new PrismaClient();

const KAFKA_TOPIC = "zap-events";

const kafka = new Kafka({
  clientId: "zapify-outbox-processor",
  brokers: ["localhost:9092"],
});

async function main() {
  const producer = kafka.producer();
  await producer.connect();

  // keep running until the process is stopped
  while (true) {
    // get 10 pending rows from the database
    const pendingRows = await client.zapRunOutbox.findMany({
      where: {},
      take: 10,
    });

    // send the rows to the kafka topic 
    await producer.send({
      topic: KAFKA_TOPIC,
      messages: pendingRows.map((row) => ({
        value: row.zapRunId,
      })),
    });

    // delete the rows from the database after sending them to the kafka topic`
    await client.zapRunOutbox.deleteMany({
      where: {
        id: {
          in: pendingRows.map((row) => row.id),
        },
      },
    });

    
  }
}

main();

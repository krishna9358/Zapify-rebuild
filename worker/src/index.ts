import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "worker",
  brokers: ["localhost:9092"],
});

const KAFKA_TOPIC = "zap-events";

// consumer group id
async function main() {
  const consumer = kafka.consumer({ groupId: "main-worker" });
  await consumer.connect();

  // get 10 rows from kafka redis queue
  // subsribing to the kafka topic
  await consumer.subscribe({ topic: KAFKA_TOPIC, fromBeginning: true });

  // run the consumer
  await consumer.run({
    // commit offsets are the commits when kafka has processed the message
    // we will commit the offsets manually. Auto commit is the default behavior of kafka. Manual committing means that we will commit the offsets when we have processed the message. And if the server dies, the message will be processed again from that offset.
    autoCommit: false, 

    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset, // offset is the position of the message in the topic
        value: message.value?.toString(),
      });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      // manually commit the offsets after processing the message(acknowledgement)
      await consumer.commitOffsets([
        {
          topic: KAFKA_TOPIC,
          partition,
          offset: (parseInt(message.offset) + 1).toString(),
        },
      ]);
    },
  });
}

main();

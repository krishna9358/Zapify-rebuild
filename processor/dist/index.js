"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const kafkajs_1 = require("kafkajs");
const client = new client_1.PrismaClient();
const KAFKA_TOPIC = "zap-events";
const kafka = new kafkajs_1.Kafka({
    clientId: "zapify-outbox-processor",
    brokers: ["localhost:9092"],
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const producer = kafka.producer();
        yield producer.connect();
        // keep running until the process is stopped
        while (true) {
            // get 10 pending rows from the database
            const pendingRows = yield client.zapRunOutbox.findMany({
                where: {},
                take: 10,
            });
            // send the rows to the kafka topic 
            yield producer.send({
                topic: KAFKA_TOPIC,
                messages: pendingRows.map((row) => ({
                    value: row.zapRunId,
                })),
            });
            // delete the rows from the database after sending them to the kafka topic`
            yield client.zapRunOutbox.deleteMany({
                where: {
                    id: {
                        in: pendingRows.map((row) => row.id),
                    },
                },
            });
        }
    });
}
main();

For all modules:
postgres, kafkajs must be
run the docker postgres, kafka
`docker run -d --name zapify-kafka -p 9092:9092 apache/kafka:latest`
`docker run -d --name zapify -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword postgres`
CONST KAFKA_TOPIC="zap-events"

Hooks : 
npm install 
npx prisma migrate dev
npx prisma generate
npm run dev


processor: 
npm install 
make topic, publisher in kafka,
`docker exec -it <id kafka container> /bin/bash`
`cd /opt/kafka/bin`
Topic : `kafka-topics.sh --bootstrap-server localhost:9092 --topic zap-events --create`
npx prisma generate
npm run dev

worker:
npm run install
npm run dev 



TIll now : 
0. Can create zap, trigger, action,(using prisma studio)
1. Hooks can get hit from external source like github. The data will go to database ( zapRun, zapRunOutbox )
3. Processsor will take the data from zapRunOUtbox and push to kafka queue and removing from zapRunOutbox. 
4. Now, worker is taking events from kafka queue and processing it further. 
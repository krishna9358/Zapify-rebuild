Hooks : 
npm install 
run the docker postgres
npx prisma generate
npm run dev


processor: 
npm install 
run the docker postgres, kafka
`docker run -d --name zapify-kafka -p 9092:9092 apache/kafka:latest`
`docker run -d --name zapify -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword postgres`
make topic, publisher and subscriber in kafka,
`docker exec -it <id kafka container> /bin/bash`
`cd /opt/kafka/bin`
Topic : `kafka-topics.sh --bootstrap-server localhost:9092 --topic zap-events --create`

npx prisma generate
npm run dev



TIll now : 
0. Can create zap, trigger, action,(using prisma studio)
1. Hooks can get hit from external source like github. The data will go to database ( zapRun, zapRunOutbox )
3. Processsor will take the data from zapRunOUtbox and push to kafka queue. 
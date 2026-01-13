import Bull from "bull";
import dotenv from "dotenv";

dotenv.config();
const redisOptions = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
};

const myQueue = new Bull("my-queue", {
  redis: redisOptions,
});

myQueue.process((payload, done) => {
  console.log(`Prearing the burger...`, payload.data);
  setTimeout(() => {
    console.log(`Burger is ready! 🍔`);
    done();
  }, 2000);
});

// Adding a test job to the queue
myQueue.add({
  bun: "🍔",
  cheese: "🧀",
  toppings: ["🍅", "🥬", "🧅"],
});

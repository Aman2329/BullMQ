const { Queue, isEmpty } = require("bullmq");

const notificationQueue = new Queue("email-queue", {
  connection: {
    host: "127.0.0.1",
    port: 6379,
    password: "your_redis_password",
  },
});

async function init() {
  const res = await notificationQueue.add("email to aman", {
    email: "aman@gmail.com",
    subject: "Welcome to our service",
    body: "Thank you for signing up!",
  });
  console.log("Job added with ID:", res.id);
}

init();

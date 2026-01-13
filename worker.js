const { Worker } = require("bullmq");

const sendEmail = () => new Promise((res) => setTimeout(res, 5 * 1000));

const worker = new Worker(
  "email-queue",
  async (job) => {
    console.log(`Processing job ID: ${job.id}`);
    console.log("Email details");
    console.log(`Sending email... ${job.data.email}`);
    await sendEmail();
    console.log("email sent successfully");
  },
  {
    connection: {
      host: "127.0.0.1",
      port: 6379,
      password: "yourpasswordhere",
    },
  }
);

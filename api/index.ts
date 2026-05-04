import express from "express";
import path from "path";

const app = express();
app.use(express.json());

// API route
app.post("/api/leads", async (req, res) => {
  const { name, email, phone } = req.body;
  console.log("New Lead Captured:", { name, email, phone, timestamp: new Date() });
  
  // Simulate delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  res.json({ success: true, message: "Thank you! I'll reach out shortly." });
});

// GET health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", env: process.env.NODE_ENV });
});

export default app;

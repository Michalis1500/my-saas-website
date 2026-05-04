import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // Lead capture endpoint
  app.post("/api/leads", async (req, res) => {
    const { name, email, phone } = req.body;
    
    console.log("New Lead Captured:", { name, email, phone, timestamp: new Date() });
    
    /**
     * OPTION B Integration Point:
     * To send emails, you would initialize Nodemailer here:
     * const transporter = nodemailer.createTransport({...});
     * await transporter.sendMail({ from: ..., to: ..., subject: 'New Lead', text: ... });
     */

    // Simulate database/processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    res.json({ success: true, message: "Thank you! I'll reach out shortly." });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// Export for Vercel
const app = express();
if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(process.cwd(), 'dist');
  app.use(express.static(distPath));
}
export default app;

if (process.env.NODE_ENV !== 'production') {
  startServer();
}

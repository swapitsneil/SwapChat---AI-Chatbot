import express from 'express';
import cors from 'cors';
import { chatWithGemini } from './LLM.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/chat', async (req, res) => {
  const { userMessage } = req.body;
  if (!userMessage) return res.status(400).json({ error: 'Missing userMessage' });
  try {
    const reply = await chatWithGemini(userMessage);
    res.json({ reply });
  } catch (e) {
    res.status(500).json({ error: 'AI error: ' + e.message });
  }
});

app.listen(3000, () => console.log('API server running on http://localhost:3000'));

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import axios from 'axios';
import { body, validationResult } from 'express-validator';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001; // Changed to 3001 to avoid conflict

// Middleware
app.use(cors({
  origin: 'http://localhost:3001', // Frontend URL (Adjust if different)
  methods: 'GET,POST',
}));
app.use(helmet());
app.use(bodyParser.json());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 30, // 30 requests per minute per IP
});
app.use(limiter);

// OpenAI API Key Error Check
if (!process.env.OPENAI_API_KEY) {
  console.error('ERROR: OpenAI API key is missing!');
  process.exit(1); // Exit the app if the API key is missing
}

// OpenAI response logic
const getAIResponse = async (message) => {
  try {
    console.log('Sending request to OpenAI...');

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo', // You can use gpt-4 if needed
        messages: [{ role: 'user', content: message }],
        max_tokens: 150,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('OpenAI Response:', response.data);  // Log full OpenAI response for debugging
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('OpenAI API error:', error.response?.data || error.message);
    return 'Sorry, I couldn't process your request at the moment.';
  }
};

// POST /ai (Validated Version)
app.post(
  '/ai',
  [body('message').trim().notEmpty().withMessage('Message is required')],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { message } = req.body;
    console.log('Received message:', message);

    const aiResponse = await getAIResponse(message);

    res.json({
      response: aiResponse,
    });
  }
);

// POST /ai-basic (Simple version without validation)
app.post('/ai-basic', async (req, res) => {
  const { message } = req.body;

  if (!message || message.trim() === '') {
    return res.status(400).json({ error: 'Message is required' });
  }

  const aiResponse = await getAIResponse(message);
  res.json({ response: aiResponse });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
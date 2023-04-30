/* This code is creating an Express router that listens for GET and POST requests on the root route
('/'). When a GET request is received, it sends a JSON response with a message. When a POST request
is received, it uses the OpenAI API to generate an image based on the provided prompt, and sends the
resulting image as a JSON response. The code also uses the dotenv package to load environment
variables from a .env file, and the Configuration and OpenAIApi classes from the openai package to
configure and interact with the OpenAI API. */
import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL-E!' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
    res.status(500).send(error?.response.data.error.message || 'Something went wrong');
  }
});

export default router;
import 'dotenv/config';
import express from 'express';
import connectDB from './db';
import globalRouter from './global-router';
import { logger } from './logger';
import cors from 'cors';
import { uploadFile } from './middlewares/s3-middleware';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: '*', 
  exposedHeaders: '*',
  credentials: true
}));

uploadFile("spotift-nf-2024", Buffer.from("Hello World"), "test-file.txt")

connectDB();

app.use(logger);
app.use(express.json());
app.use('/api/',globalRouter);
app.use(cors());


app.listen(PORT, () => {
  console.log(`Server runs at http://localhost:${PORT}`);
});

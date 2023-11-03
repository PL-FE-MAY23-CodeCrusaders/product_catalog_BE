import dotenv from 'dotenv';
dotenv.config();
// import cors from 'cors';
import express from 'express';
import { connectionTest } from './db'

const PORT = Number(process.env.PORT);
// const CLIENT_URL = process.env.CLIENT_URL;
const app = express();

// app.use(
//   cors({
//     origin: CLIENT_URL,
//   })
// );
// app.use(express.json());



app.listen(PORT, () => {
  connectionTest();
  console.log(`API is ready on http://localhost:${PORT}`);
});

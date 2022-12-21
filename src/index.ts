import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

dotenv.config();
const app: Express = express().use(bodyParser.json());

const MONGODB_URI = '<your mongodb uri goes here>';
const port: string | number = process.env.PORT || 8000


// mongoose
//   .connect(MONGODB_URI)
//   .then(() => {
//     console.log(`Listening on port ${PORT}`);
//     app.listen(port);
//   })
//   .catch((err: any) => {
//     console.log('An error has ocurred while connecting to database:', err);
//   });

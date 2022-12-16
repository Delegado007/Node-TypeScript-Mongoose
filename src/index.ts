import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express().use(bodyParser.json());

const MONGODB_URI = '<your mongodb uri goes here>';
const PORT = 3000;

mongoose
	.connect(MONGODB_URI)
	.then(() => {
		console.log(`Listening on port ${PORT}`);
		app.listen(PORT);
	})
	.catch((err: any) => {
		console.log('An error has ocurred while connecting to database:', err);
	});

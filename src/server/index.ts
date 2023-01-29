import express, { Express, Request, Response } from "express";
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import helmet from 'helmet';
import { MongoClient, ConnectOptions } from "mongodb";
import dotenv from 'dotenv';

// TODO HTTPS

// * Root Router
import rootRouter from '../routes';
import mongoose from "mongoose";

// * Enviroment Variables
dotenv.config();

// * Create Express APP
const server: Express = express();

// * Swagger Config and route
server.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
      explorer: true
    }
  })
)

// * Define SERVER to use /api and use rootRouter from index.ts in routes
server.use('/api', rootRouter)

// Static server
server.use(express.static('public'));

// connect to mongoDB
// Connection URI
const mongoUser = process.env.MONGO_USER
const mongoPort = process.env.MONGO_PORT
const mongoPassword = process.env.MONGO_PASSWORD
const uri = `mongodb://${mongoUser}:${mongoPassword}@localhost:${mongoPort}/?authMechanism=DEFAULT`

// Create a new MongoClient
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();
//     // Establish and verify connection
//     const database = await client.db("cursoMongoV2");
//     const userCollection = await database.collection("Users")
//     console.log("Connected successfully to MongoDB");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
const options = { useUnifiedTopology: true, useNewUrlParser: true };
const URI = "mongodb://localhost:27017/test_api"
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions)
  .then(
    () => {
      console.log("connection db ready to store")
    },
    (err) => {
      console.log("CONNECTION ERROR - ", err)
    },
  )
// * Security Config
server.use(helmet());
server.use(cors());

// * Content Type: 
server.use(express.urlencoded({ extended: true, limit: '50mb' })) // para controla rel tamaño de las req
server.use(express.json({ limit: '50mb' }))

// * Redirection Config
// http://localhost:8000/ ----> http://localhost:8000/api/ hacer redirect a la ruta api
server.get('/', (req: Request, res: Response) => {
  res.redirect('/api');
})

export default server;

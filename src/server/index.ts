import express, { Express, Request, Response } from "express";


// * Security
import cors from 'cors';
import helmet from 'helmet';

// TODO HTTPS

// * Root Router
import rootRouter from '../routes';


// * Create Express APP
const server: Express = express();
const port: string | number = process.env.PORT || 8000;

// * Define SERVER to use /api and use rootRouter from index.ts in routes
server.use('/api', rootRouter)

// Static server
server.use(express.static('public'));

// TODO Mongoose Connection

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
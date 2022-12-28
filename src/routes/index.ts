/**
 * Root Router
 * Redirections to Routers
 */

import express, { Response, Request } from 'express';
import helloRouter from './HelloRouter';
import { LogInfo, LogSuccess } from './../utils/logger';
import goodbyeRouter from './GoodbyeRouter';

// Server intance
let server = express();

// Router instance
let rootRouter = express.Router();

// Activate for requests to http://localhost:8000/api

// GET: http://localhost:8000/api/
rootRouter.get('/', (req: Request, res: Response) => {
  LogInfo('GET: http://localhost:8000/api')
  res.send('Welcome to my API')
})

// Redirections to Router & Controllers
server.use('/', rootRouter) // http://localhost:8000/api
server.use('/hello', helloRouter) // http://localhost:8000/api/hello
server.use('/goodbye', goodbyeRouter) // http://localhost:8000/api/hello

// Add more routes to the app

export default server;

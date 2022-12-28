import express, { Request, Response } from "express";
import { GoodbyeController } from "./../controller/GoodbyeController";

// Router from express
let goodbyeRouter = express.Router();

// http:localhost:8000/api/goodbye
goodbyeRouter.route('/')
  // GET:
  .get(async (req: Request, res: Response) => {
    // Get query params called name || undefined
    let name: string | undefined = `${req?.query?.name}` || undefined
    // Create new instance of GoodbyeController
    const controller: GoodbyeController = new GoodbyeController();
    // Obtain Response
    const response = await controller.getMessage(name);
    // Send to the client the response
    return res.send(response);
  })

// Export goodbye router
export default goodbyeRouter;
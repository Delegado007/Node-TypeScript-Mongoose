import express, { Request, Response } from "express";
import { SemillaController } from "./../controller/SemillaController";
import { LogInfo } from "./../utils/logger";


// Router from express
let semillaRouter = express.Router();

// http:localhost:8000/api/semilla
semillaRouter.route('/')
  // GET:
  .get(async (req: Request, res: Response) => {
    // Controller instance to excute method
    const controller: SemillaController = new SemillaController();
    // Obtain Response
    const response: SemillaController = await controller.getSemilla();
    // Send to the client the response

    return res.send(response)
  })

export default semillaRouter;
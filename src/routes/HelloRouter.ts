import { BasicResponse } from "@/controller/types";
import express, { Request, Response } from "express";
import { HelloController } from "./../controller/HelloController";
import { LogInfo } from "./../utils/logger";

// Router from express

let helloRouter = express.Router();

// http:localhost:8000/api/hello?name=Franco/
helloRouter.route('/')
  // GET:
  .get(async (req: Request, res: Response) => {
    // Obtener a query param
    let name: any = req?.query?.name;
    LogInfo(`Query Param: ${name}`)
    // Controller instance to excute method
    const controller: HelloController = new HelloController();
    // Obtain Response
    const response: BasicResponse = await controller.getMessage(name);
    // Send to the client the response
    return res.send(response);
  })

// Export hello router
export default helloRouter;
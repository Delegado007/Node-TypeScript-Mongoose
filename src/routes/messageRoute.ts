// import express, { Request, Response } from "express";
// import { Messages } from "@/controller/messageController";
// import { LogInfo } from "@/utils/logger";

// let messageRoute = express.Router()
// // http://localhost:8000/api/hello?name=Franco
// messageRoute.route('/message')
//   .get(async (req: Request, res: Response) => {
//     let name: any = req?.query?.name;
//     let date = new Date()
//     LogInfo(`Query Params: ${name}`)
//     const controller = new Messages(date, true)
//     const response = await controller.timestamp
//     return res.send(response)
//   })
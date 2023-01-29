import express, { Request, Response } from "express";
import { UserController } from "./../controller/UserController";
import { LogInfo } from "./../utils/logger";

// Router from express

let userRouter = express.Router();

// http:localhost:8000/api/users?id=63d59d23c0a0b6bbce8497cc
userRouter.route('/')
  // GET:
  .get(async (req: Request, res: Response) => {
    // Obtain a Query param (ID)
    let id: any = req?.query?.id
    LogInfo(`Query Param: ${id}`);
    // Controller instance to excute method
    const controller: UserController = new UserController();
    // Obtain Response
    const response: UserController = await controller.getUsers(id);
    // Send to the client the response

    return res.send(response);
  })
  // DELETE:
  .delete(async (req: Request, res: Response) => {
    // Obtain a Query param (ID)
    let id: any = req?.query?.id
    LogInfo(`Query Param: ${id}`);
    // Controller instance to excute method
    const controller: UserController = new UserController();
    // Obtain Response
    const response: UserController = await controller.deleteUser(id);
    return res.send(response)
  })
  // POST
  .post(async (req: Request, res: Response) => {
    // Obtain a Query param (ID)
    let user: any = JSON.stringify(req)
    LogInfo(`Body: ${user}`);
    // Controller instance to excute method
    const controller: UserController = new UserController();
    // Obtain Response
    const response: UserController = await controller.createUser(user);
    return res.send(response)
  })
  // PUT
  .put(async (req: Request, res: Response) => {
    // Obtain a Query param (ID)
    let id: any = req?.query?.id
    let user: any = req?.query?.user
    LogInfo(`Query Param: ${id}, ${user}`);

    // Controller instance to excute method
    const controller: UserController = new UserController();
    // Obtain Response
    const response: UserController = await controller.updaterUser(id, user);
    return res.send(response)
  })
// Export hello router
export default userRouter;

import { BasicResponse } from "../types";

// import { MessageType } from "../types";

export interface IHelloController {
  getMessage(name?: string): Promise<BasicResponse>
}
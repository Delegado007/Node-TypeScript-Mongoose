import { BasicResponse } from "../types";

// import { MessageType } from "../types";

export interface IHelloController {
  getMessage(name?: string): Promise<BasicResponse>
}

export interface IGoodbye {
  getMessage(): Promise<BasicResponse>
}
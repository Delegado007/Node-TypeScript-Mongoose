import { BasicResponse, BasicResponseWhitDate } from "../types";

// import { MessageType } from "../types";

export interface IHelloController {
  getMessage(name?: string): Promise<BasicResponse>
}

export interface IGoodbye {
  getMessage(name: string): Promise<BasicResponseWhitDate>
}
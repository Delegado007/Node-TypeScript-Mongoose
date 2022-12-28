import { BasicResponse } from "./types";
import { IGoodbye } from "./interfaces";
import { LogSuccess } from "./../utils/logger";

export class GoodbyeController implements IGoodbye {

  public async getMessage(): Promise<BasicResponse> {

    LogSuccess('[/api/goodbye] Get Request');

    return {
      message: 'Goodbye, world'
    }
  }
}
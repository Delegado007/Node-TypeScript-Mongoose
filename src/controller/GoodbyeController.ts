import { BasicResponseWhitDate } from "./types";
import { IGoodbye } from "./interfaces";
import { LogSuccess } from "./../utils/logger";

export class GoodbyeController implements IGoodbye {

  public async getMessage(name: string | undefined): Promise<BasicResponseWhitDate> {
    const date: Date = new Date;
    LogSuccess('[/api/goodbye] Get Request');

    return {
      message: `Goodbye ${name}`,
      date: date
    }
  }
}
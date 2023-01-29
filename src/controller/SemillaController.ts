import { Get, Route, Tags } from "tsoa";
import { ISemillaController } from "./interfaces";
import { LogSuccess, LogError } from "../utils/logger";

// ORM - Semilla Collection
import { getAllSemilla } from "../domain/orm/Semilla.orm";

@Route("/api/semilla")
@Tags("SemillaController")

export class SemillaController implements ISemillaController {
  /**
   * Endpoint to retrive the Semilla in the collection "Semilla" of DB
   */
  public async getSemilla(): Promise<any> {
    LogSuccess('[/api/semilla] Get all Semilla Request')
    const response = await getAllSemilla();
    return response
  }
}

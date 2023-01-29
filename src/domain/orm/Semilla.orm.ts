import { semillaEntity } from "../entities/Semilla.entity";
import { LogError, LogSuccess } from "./../../utils/logger";

// CRUD

/**
 * Method to obtain all User from Collection "Semilla" in Mongo Server
 */
export const getAllSemilla = async (): Promise<any[] | undefined> => {
  try {
    let semillaModel = semillaEntity();

    // Search all documents in Semilla collection
    let response = await semillaModel.find();
    LogSuccess(`[LOG SUCCESS]: search all document in semilla collection`)
    return response;
  } catch (error) {
    LogError(`[ORM ERROR]: Getting All Semilla: ${error}`)
  }
}

// TODO:
// - Get User By ID
// - Get User By Email
// - Delete User By ID
// - Update User By ID

import { userEntity } from "../entities/User.entity";

import { LogError, LogSuccess } from "./../../utils/logger";

// CRUD

/**
 *  Method to obtain all Users from Collection "User" in Mongo Server
 */
export const getAllUsers = async (): Promise<any[] | undefined> => {
  try {
    let userModel = userEntity();

    // Search all users in users collection
    let response = await userModel.find();
    return response;
  } catch (error) {
    LogError(`[ORM ERROR]: Getting All Users: ${error}`);
  }
}
// - Get User By ID
export const getUserByID = async (id: string): Promise<any | undefined> => {
  try {
    let userModel = userEntity();

    // Search User by ID
    return await userModel.findById(id);

  } catch (error) {
    LogError(`[ORM ERROR]: Getting User By ID ${error}`);
  }
}
// - Delete User By ID

export const deleteUserByID = async (id: string): Promise<any | undefined> => {

  try {
    let userModel = userEntity();

    // Delete User By ID

    return await userModel.deleteOne({ _id: id })
  } catch (error) {
    LogError(`[ORM ERROR]: Deleting User By ID: ${error}`);
  }

}
// - Create new User
export const createUsers = async (user: any): Promise<any | undefined> => {
  try {
    let userModel = userEntity();

    // Create / Insert new user
    return await userModel.create(user);
  } catch (error) {
    LogError(`[ORM ERROR]: Creating User: ${error}`)
  }
}

// - Update User By ID
export const updateUserByID = async (user: any, id: string): Promise<any | undefined> => {
  try {
    let userModel = userEntity();

    // Update User
    return await userModel.findByIdAndUpdate(id, user);
  } catch (error) {
    LogError(`[ORM ERROR]: Updating User: ${id}: ${error}`)
  }
}
// TODO:
// - Get User By Email



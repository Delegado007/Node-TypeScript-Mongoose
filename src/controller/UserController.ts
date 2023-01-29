import { Delete, Get, Post, Put, Query, Route, Tags } from "tsoa";
import { IUserController } from "./interfaces";
import { LogSuccess, LogError, LogWarning } from "./../utils/logger";

// ORM - Users Collection
import { deleteUserByID, getAllUsers, getUserByID, createUser, updateUserByID } from "./../domain/orm/User.orm";


@Route("/api/users")
@Tags("UserController")

export class UserController implements IUserController {
  /**
   * Endpoint to retrive the Users in the Collection "users" of DB
   * @param {string} id ID of user to retreive (optional)
   * @returns All user or user found by ID
  */
  @Get("/")
  public async getUsers(@Query() id?: string): Promise<any> {

    let response: any = ""
    if (id) {
      LogSuccess(`[/api/users] Get user By ID: ${id}`);
      response = await getUserByID(id)
    } else {
      LogSuccess('[/api/users] Get all Users Request');
      response = await getAllUsers();
    }

    return response;
  }
  /**
   * Endpoint to Delete the Users in the Collection "users" of DB
   * @param {string} id ID of user to delete (optional)
   * @returns message informing if deletion was correct
  */
  @Delete("/")
  public async deleteUser(@Query() id?: string): Promise<any> {

    let response: any = "";
    if (id) {
      LogSuccess(`[/api/users] Delete user By ID: ${id}`);
      response = await deleteUserByID(id);
    } else {
      LogWarning('[/api/users] Delete User Request WITHOUT ID');
      response = {
        message: "Please, provide an ID to remove from database"
      }
    }

    return response;
  }

  @Post("/")
  public async createUser(user: any): Promise<any> {

    if (!user) {
      LogWarning("[/api/users]: body to create user is undefinded")
      return false
    }
    const response: any = await createUser(user);
    LogSuccess(`[/api/users]: Create new user: ${user.name}`);
    return response;
  }

  @Put("/")
  public async updaterUser(@Query() id: string, user: any): Promise<any> {

    let response: any = "";
    if (id) {
      response = await updateUserByID(id, user);
      LogSuccess(`[/api/users] User whit ID: ${id} Updated successfully`);
    } else {
      LogWarning('[/api/users] Update User Request WITHOUT ID');
      response = {
        message: "Please, provide an ID to Update User from database"
      }
    }

    return response;
  }
}

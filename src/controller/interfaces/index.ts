import { BasicResponse, BasicResponseWhitDate } from "../types";

// import { MessageType } from "../types";

export interface IHelloController {
  getMessage(name?: string): Promise<BasicResponse>
}

export interface IGoodbye {
  getMessage(name: string): Promise<BasicResponseWhitDate>
}

export interface ISemillaController {
  // Read all user from database 
  getSemilla(): Promise<any[]>
}

export interface IUserController {
  // Read all user from database || get User by ID
  getUsers(id?: string): Promise<any>
  // Delete User By ID
  deleteUser(id?: string): Promise<any>
  // Create new User
  createUser(user: any): Promise<any>
  // Update user
  updaterUser(id: string, user: any): Promise<any>
}

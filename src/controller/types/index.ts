/**
 * Basic JSON response for controller 
 */

export type BasicResponse = {
  message: string
}

/**
 * Error JSON response for controller
 */
export type ErrorResponse = {
  error: string,
  message: string
}
/**
 * Response JSON {meesage: string, date: Date}
 */
export type BasicResponseWhitDate = {
  message: string,
  date: Date
}
// export type MessageType = {
//   timestamp: Date,
//   isReceibed: boolean
// }

// export type ErrorResponse = {
//   error: string,
//   message: string
// }
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
// export type MessageType = {
//   timestamp: Date,
//   isReceibed: boolean
// }

// export type ErrorResponse = {
//   error: string,
//   message: string
// }
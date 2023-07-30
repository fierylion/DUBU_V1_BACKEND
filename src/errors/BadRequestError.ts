import CustomError from './CustomErrorInterface'
import { StatusCodes } from 'http-status-codes'
import DefinedErrors from './DefinedErrors'
class BadRequestError extends DefinedErrors implements CustomError {
  status = StatusCodes.BAD_REQUEST
  constructor(message: string) {
    super(message)
  }
}
export default BadRequestError

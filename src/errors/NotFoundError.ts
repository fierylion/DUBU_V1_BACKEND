import { StatusCodes } from 'http-status-codes'
import CustomError from './CustomErrorInterface'
import DefinedErrors from './DefinedErrors'
class NotFoundError extends DefinedErrors implements CustomError {
  status = StatusCodes.NOT_FOUND
  constructor(message: string) {
    super(message)
  }
}
export default NotFoundError

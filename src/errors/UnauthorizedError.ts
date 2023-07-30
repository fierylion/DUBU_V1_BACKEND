import { StatusCodes } from 'http-status-codes'
import CustomError from './CustomErrorInterface'
import DefinedErrors from './DefinedErrors'
class UnauthorizedError extends DefinedErrors implements CustomError {
  status = StatusCodes.UNAUTHORIZED
  constructor(message: string) {
    super(message)
  }
}
export default UnauthorizedError

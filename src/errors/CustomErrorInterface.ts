import { StatusCodes } from "http-status-codes"
interface CustomError extends Error{
 status:number;
}
export default CustomError
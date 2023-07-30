import { Request,Response, ErrorRequestHandler, NextFunction } from "express"
import { UnauthorizedError, BadRequestError, DefinedErrors, CustomErrorInterface } from "../errors"
import { StatusCodes } from "http-status-codes"
import mongoose from "mongoose"
import { MongoServerError } from "mongodb"


const errorHandler = (err:Error, req:Request, res:Response, next:NextFunction)=>{
 if(err instanceof mongoose.Error.ValidationError){
  let message:string = Object.values(err.errors).map((item)=> item.message).join(' , ');
 return res.status(StatusCodes.BAD_REQUEST).json({
  msg: message
 })
 }
 if(err instanceof mongoose.Error.CastError){
  const msg = `No item with id ${err.value}`;
  return res.status(StatusCodes.BAD_REQUEST).json({
   msg:msg
  })
 }

 if(err instanceof DefinedErrors ){
  
  return res.status(err.status).json({
   msg:err.message
  })
  

 }
 if(err instanceof MongoServerError && err.code===11000){
  console.log(err)
  res.status(StatusCodes.BAD_REQUEST).json({msg:"duplicate entry for "+ Object.keys(err.keyPattern)[0]})
 }
 
 if (err.message.toLowerCase().includes('Unexpected token'.toLowerCase())){
  res.status(StatusCodes.BAD_REQUEST).json({
   msg: err.message
  })
 }
 console.log(err)
   res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
     msg: 'Something went wrong',
   })


}
export default errorHandler;
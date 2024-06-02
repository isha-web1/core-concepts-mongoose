import { NextFunction, Request, Response } from "express"

const globalErrorHandler = (error: any, req:Request, res:Response, next:NextFunction) =>{
    const statusCode = 500
    const  message = error.message ||'something went wrong'
  
    return res.status(statusCode).json({
      success : false,
      error : error,
      message ,
      
  
    })
  
  }

  export default globalErrorHandler;
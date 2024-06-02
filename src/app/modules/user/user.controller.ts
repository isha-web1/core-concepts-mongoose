import { NextFunction, Request, Response } from "express"
import { UserServices } from "./user.service"

const createStudent = async(req : Request, res : Response, next: NextFunction) =>{

    try{
     // create a schema validation using Zod
     
     const {password,student : studentData} = req.body
 
    //  const zodParseData = StudentValidationSchema.parse(studentData)
     // will call service function to send this data
     console.log(studentData)
 
     const result = await UserServices.createStudentIntoDb(password, studentData)
 
     // send response
     res.status(200).json({
         success : true,
         message : 'student is created successfully',
         data : result
 
     })
 
    }catch(error){
     next(error)
    }
      
 }

 export const UsersController = {
    createStudent
 }
import { Request, Response } from "express";
import { studentService } from "./student.service";

const createStudent = async(req : Request, res : Response) =>{

   try{
    const student = req.body
    // will call service function to send this data

    const result = await studentService.createStudentIntoDb(student)

    // send response
    res.status(200).json({
        success : true,
        message : 'student is created successfully',
        data : result

    })

   }catch(error){
    console.log(error)
   }
     
}

export const StudentController = {
    createStudent
}
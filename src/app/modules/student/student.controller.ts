import { NextFunction, Request, Response } from "express";
import { studentService } from "./student.service";






const getAllStudent = async(req: Request, res: Response, next : NextFunction) =>{
    try{
        const result = await studentService.getAllStudentsFromDb()
        res.status(200).json({
            success : true,
            message : 'student are retrieve successfully',
            data : result
    
        })

    }catch(error){
        next(error)
    }
}

const getSingleStudent = async(req : Request, res: Response, next:NextFunction) =>{
    try{
        const {studentId} = req.params;
        const result = await studentService.getSingleStudentFromDb(studentId)
        res.status(200).json({
            success : true,
            message : 'student is retrieve successfully',
            data : result
    
        })

    }catch(error){
        next(error)
    }
}

export const StudentController = {
    
    getAllStudent,
    getSingleStudent
}
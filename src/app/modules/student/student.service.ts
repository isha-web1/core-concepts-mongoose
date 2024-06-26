
import {StudentModel} from "../student.model"



const getAllStudentsFromDb = async() =>{
  const result = await StudentModel.find();
  return result
}
const getSingleStudentFromDb = async(id : string) =>{
  const result = await StudentModel.findOne({id});
  return result
}

export const studentService = {
    
    getAllStudentsFromDb,
    getSingleStudentFromDb
}
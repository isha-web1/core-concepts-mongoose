
import config from "../../config"
import { Student } from "../student/student.interface"

import { user } from "./user.model"
import { StudentModel } from "../student.model"
import { TUser } from "./user.interface"

const createStudentIntoDb = async(password : string,studentData : Student)=>{

    // create a user object
    const userData : Partial<TUser> = {}

    // if password is not given, use default password
    userData.password = password || config.default_pass as string
   

    // set student role
    userData.role = 'student'

    // set manually generated id
    userData.id = '202310001'

    // create a user
    const NewUser =  await user.create(userData)
    // create a student
    if(Object.keys(NewUser).length){
        // set id, _id as user
        studentData.id = NewUser.id  /* embed id */
        studentData.user =  NewUser._id  /* reference _id */

        const newStudent = await StudentModel.create(studentData)
        return newStudent

    }
        

   
  }

  export const UserServices = {
    createStudentIntoDb
  }
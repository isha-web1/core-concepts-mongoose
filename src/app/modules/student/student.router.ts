import express from 'express'
import { StudentController } from './student.controller'

const router = express.Router()

// will call controller function


 router.get('/', StudentController.getAllStudent)

 router.get('/:studentId', StudentController.getSingleStudent)

 export const StudentRoutes = router;
import express from 'express'
import { UsersController } from './user.controller';


const router = express.Router()

// will call controller function
 router.post('/create-student', UsersController.createStudent)


 export const UsersRoutes = router;
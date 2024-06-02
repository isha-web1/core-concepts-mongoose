import express, { Application, NextFunction, Request, Response, } from 'express'
import cors from 'cors'
import { StudentRoutes } from './app/modules/student/student.router'
import { UsersRoutes } from './app/modules/user/user.route'
import globalErrorHandler from './app/middleware/globalErrorHandler'
const app : Application = express()


// parsers
app.use(express.json())
app.use(cors())

//Application routes

app.use('/api/v1/students', StudentRoutes)
app.use('/api/v1/users', UsersRoutes)

const getAController = (req : Request, res : Response) => {
  const a = 10
  res.send({a})
}

app.get('/', getAController)

app.use(globalErrorHandler)

export default app;


import {  Router } from 'express'
import { changeTaskStatus, createTaskController, deleteTaskController, getTaskController, getTasksController, updateTaskController } from '../controllers/taskController.js'
import { isLogin } from '../middleware/isLogin.js'


export const taskRouter = Router()

// api/v1/tasks
taskRouter.post("/", isLogin,  createTaskController)

// api/v1/tasks
taskRouter.get("/", isLogin,  getTasksController)

// // api/v1/tasks/:id
taskRouter.get("/:id", isLogin, getTaskController)

// // api/v1/tasks/:id
taskRouter.put("/:id", isLogin,  updateTaskController)

// // api/v1/tasks/changeStatus/:id
taskRouter.patch("/changeStatus/:id", isLogin,  changeTaskStatus)

// // api/v1/tasks/:id
taskRouter.delete("/:id", isLogin,  deleteTaskController)
import { Router } from "express"
import { deleteUserController, loginUserController, profilelUserController, registerUserController, updateUserController } from "../controllers/userController.js"
import { isLogin } from "../middleware/isLogin.js"

export const userRouter = Router()

// api/v1/users/register
userRouter.post("/register", registerUserController)

// api/v1/users/login
userRouter.post("/login", loginUserController)

// api/v1/users/perfil:id
userRouter.get("/profile",isLogin, profilelUserController)

// // api/v1/users/:id
userRouter.put("/profile", isLogin, updateUserController)

// // api/v1/users/:id
userRouter.delete("/profile", isLogin, deleteUserController)
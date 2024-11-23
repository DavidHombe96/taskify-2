import { Router } from "express"
import { deleteUserController, getUsersController, loginUserController, profilelUserController, registerUserController, updateUserController } from "../controllers/userController.js"
import { isLogin } from "../middleware/isLogin.js"

export const userRouter = Router()

// api/v1/users/register
userRouter.post("/register", registerUserController)

// api/v1/users/login
userRouter.post("/login", loginUserController)

// api/v1/users/perfil:id
userRouter.get("/profile",isLogin, profilelUserController)

// // api/v1/users/:id
userRouter.put("/profile/update", isLogin, updateUserController)

// // api/v1/users/:id
userRouter.delete("/profile/delete", isLogin, deleteUserController)

// // api/v1/users/
// userRouter.get("/", getUsersController)

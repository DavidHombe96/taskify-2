import { appErr } from "../utils/appErr.js";
import { generateToken } from "../utils/generateToken.js";
import { userCaseRegister } from "../useCases/User/userCaseRegister.js";
import { userCaseLogin } from "../useCases/User/userCaseLogin.js";
import { userCaseProfile } from "../useCases/User/userCaseProfile.js";
import { userCaseUpdate } from "../useCases/User/userCaseUpdate.js";
import { userCaseDelete } from "../useCases/User/userCaseDelete.js";

export const registerUserController = async (req, res, next) => {
	try {
		const {newUser, isUserFound} = await userCaseRegister(req.body)

		if (isUserFound) {
			return next(appErr(res, "Este usuário já se encontra registado, tente fazer o login", 409));
		}

		if (!newUser) {
			return next(appErr(res, "Não foi possível registar o usuário, tente novamente", 400));
		}

		res.status(201).json({
			success: "true",
			data: {
				firstname:newUser.firstname,
				lastname:newUser.lastname,
				email:newUser.email,
				tasks:newUser.tasks,
				createdAt:newUser.createdAt,
			},
		});
	} catch (error) {
		// next(appErr(error.message));
		res.status(500).json({ message: "Internal server error"})
	}
};

export const loginUserController = async (req, res, next) => {
	try {
		const  {userFound, isPasswordMatched} = await userCaseLogin(req.body)

		if (!userFound || userFound === null || userFound === undefined) {
			return next(appErr(res, "Este email não se encontra registado", 404));
			}

		if (!isPasswordMatched) {
			return next(appErr(res, "Credencial inválida, verifique sua senha", 401));
		}

		res.status(200).json({
			success: "true",
			token: generateToken(userFound._id),
			firstname: userFound.firstname,
			lastname: userFound.lastname,
			email: userFound.email,
			tasks: userFound.tasks,

		});
	} catch (error) {
		next(appErr(error.message));
	}
};

export const profilelUserController = async (req, res, next) => {
	try {
		const userProfile = await userCaseProfile(req.authUser)

		if (!userProfile)
			return next(appErr(res, "Perfil do usuário não encontrado", 404));

		res.status(200).json({
			success: "true",
			data: {
				firstname: userProfile.firstname,
				lastname: userProfile.lastname,
				email: userProfile.email,
				tasks: userProfile.tasks,
			},
		});
	} catch (error) {
		next(appErr(error.message, 500));
	}
};

export const updateUserController = async (req, res, next) => {
	try {
		const {updatedUser, isUserFound } = await userCaseUpdate(req.body, req.authUser);

		if (isUserFound) {
			return next(appErr("Este email já pertence a um outro usuario 2", 409));
		}
		// if (!isUserFound) {
		// 	return next(appErr("Usuário não encontrado", 404));
		// }


		res.status(200).json({
			success: "true",
			data: updatedUser,
		});
	} catch (error) {
		if (error.code === 11000) {
			return res.status(400).json({
				success: false,
				message: "Este email já pertence a um outro usuario",
			});
		}
		next(appErr(error.message));
	}
};

export const deleteUserController = async (req, res, next) => {
	try {
		const deletedUser = await userCaseDelete(req.authUser);
		if (!deletedUser)
			return next(appErr("Usuário não encontrado ou deletado ", 404));

		res.status(200).json({
			success: "true",
			message: "Usuário deletado",
		});
	} catch (error) {
		next(appErr(error.message));
	}
};


import { appErr } from "../utils/appErr.js";
import { User } from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";
import { comparePassword, hashedPassword } from "../utils/passwordConfig.js";

export const registerUserController = async (req, res, next) => {
	const { lastname, firstname, email, password } = req.body;
	try {
		const userFound = await User.findOne({ email });

		if (userFound) {
			return next(
				appErr("Este email já se encontra registado, tente fazer o login", 409)
			);
		}

		const newUser = await User.create({
			firstname,
			lastname,
			email,
			password: hashedPassword(password),
		});

		if (!newUser) {
			return next(appErr("Não foi possível o usuário", 400));
		}

		res.status(201).json({
			status: "true",
			data: newUser,
		});
	} catch (error) {
		next(appErr(error.message));
	}
};

export const loginUserController = async (req, res, next) => {
	const { email, password } = req.body;
	try {
		const userFound = await User.findOne({ email });

		if (!userFound || userFound === null || userFound === undefined) {
			return next(appErr("Este email não se encontra registado", 401));
		}

		const isPasswordMatched = comparePassword(password, userFound.password);

		if (!isPasswordMatched) {
			return next(appErr("Credencial inválida, verifique sua senha", 401));
		}
		res.status(200).json({
			status: "true",
			firstname: userFound.firstname,
			lastname: userFound.lastname,
			email: userFound.email,
			tasks: userFound.tasks,
			token: generateToken(userFound._id),
		});
	} catch (error) {
		next(appErr(error.message));
	}
};

export const profilelUserController = async (req, res, next) => {
	try {
		const userProfile = await User.findById(req.authUser);

		if (!userProfile)
			return next(appErr("Perfil do usuário não encontrado", 404));

		res.status(200).json({
			message: "true",
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
	const { firstname, lastname, email, password } = req.body;
	try {
		const user = await User.findById(req.authUser);

		if (!user) {
			return next(appErr("Usuário não encontrado", 404));
		}

		if (password) {
			user.password = hashedPassword(password);
		}

		user.firstname = firstname || user.firstname,
		user.lastname = lastname || user.lastname,
		user.email = email || user.email,
		user.updatedAt = Date.now();

		const updatedUser = await user.save();



		res.status(200).json({
			status: "true",
			data: updatedUser,
		});
	} catch (error) {
		next(appErr(error.message));
	}
};

export const deleteUserController = async (req, res, next) => {
	try {
		const deletedUser = await User.findByIdAndDelete(req.authUser);
		if (!deletedUser)
			return next(appErr("Usuário não encontrado ou deletado ", 404));

		res.status(204).json({
			status: "true",
			message: "Usuário deletado",
		});
	} catch (error) {
		next(appErr(error.message));
	}
};

export const getUsersController = async (req, res) => {
	try {
		const users = await User.find();
		if (!users) return next(appErr("Usuários não encontrados", 404));

		res.status(200).json({
			message: "true",
			data: users,
		});
	} catch (error) {
		next(appErr(error.message));
	}
};

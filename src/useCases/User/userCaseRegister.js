import { User } from "../../models/User.js";
import { hashedPassword } from "../../utils/passwordConfig.js";

export const userCaseRegister = async (registerDTO) => {

	const userFound = await User.findOne({email: registerDTO.email});

	if (userFound) {
		throw new Error("Este usu;ario já se encontra registado, tente fazer o login");
	}

	const passwoHashed = hashedPassword(registerDTO.password)

	const newUser = await User.create({
		firstname: registerDTO.firstname,
		lastname: registerDTO.lastname,
		email: registerDTO.email,
		password: passwoHashed,
	});

	return newUser
}
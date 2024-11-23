import { User } from "../../models/User.js";
import { hashedPassword } from "../../utils/passwordConfig.js";

export const userCaseRegister = async (registerDTO) => {

	const userFound = await User.findOne({email: registerDTO.email});
	let isUserFound = false

	if (userFound) {
		return {
			isUserFound: true,
		}
	}

	const passwoHashed =  hashedPassword(registerDTO.password)

	const newUser = await User.create({
		firstname: registerDTO.firstname,
		lastname: registerDTO.lastname,
		email: registerDTO.email,
		password: passwoHashed,
	});

	return {newUser, isUserFound}
}
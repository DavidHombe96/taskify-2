import { User } from "../../models/User.js";
import { comparePassword } from "../../utils/passwordConfig.js";

export const userCaseLogin = async(loginDTO) => {

	const userFound = await User.findOne({ email: loginDTO.email });
	let isPasswordMatched = false;

	if(!userFound) 	{
		return { userFound: null , isPasswordMatched }
	}

	isPasswordMatched =   await comparePassword(loginDTO.password, userFound.password);

	return { userFound, isPasswordMatched}

} 
import { User } from "../../models/User.js";
import { hashedPassword } from "../../utils/passwordConfig.js";

export const userCaseUpdate = async(updateDTO, authUser) => {

	const user = await User.findById(authUser);
	let isUserFound = false

	if(!user) {
		return { isUserFound: true}
	} 

	if (updateDTO.password) {
		user.password = hashedPassword(updateDTO.password);
	}

	user.firstname = updateDTO.firstname || user.firstname,
	user.lastname = updateDTO.lastname || user.lastname,
	user.email = updateDTO.email || user.email,
	user.updatedAt = Date.now();

	const updatedUser = await user.save();

	return {
		updatedUser,
		isUserFound
	}

}
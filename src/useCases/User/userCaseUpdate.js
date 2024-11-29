import { User } from "../../models/User.js";
import { hashedPassword } from "../../utils/passwordConfig.js";

export const userCaseUpdate = async(updateDTO, authUser) => {

	const user = await User.findById(authUser);
	if(!user) {
		return { isUserFound: false}
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
		isUserFound: true
	}

}
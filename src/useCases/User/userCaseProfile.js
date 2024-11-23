import { User } from "../../models/User.js";

export const userCaseProfile = async(profileDTO) => {
	const userProfile = await User.findById(profileDTO);

	return userProfile
}
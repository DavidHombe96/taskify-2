import { User } from "../../models/User.js";

export const userCaseDelete = async(authUser) => {
	return  await User.findByIdAndDelete(authUser);
}
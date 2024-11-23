import { Task } from "../../models/Task.js";

export const getTaskCase = async(getTaskDTO, authUser) => {

	const { id } = getTaskDTO;
	return await Task.findOne({_id: id, userId: authUser});
}
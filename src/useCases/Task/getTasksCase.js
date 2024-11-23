import { Task } from "../../models/Task.js";

export const getTasksCase = async (filterTasksDTO, authUser) => {
	
	const { priority, status } = filterTasksDTO;
	const query = { userId: authUser };

	if (priority) query.priority = priority;
	if (status) query.status = status;

	return await Task.find(query);
};

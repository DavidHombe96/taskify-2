import { Task } from "../../models/Task.js";

export const changeTaskStatusCase =  async(idTaskParams, changeStatusTaskDTO, authUser) => {
const { status } = changeStatusTaskDTO
const { id } =  idTaskParams
let updatedTaskStatus = null;
let isStatus =	["Pendente", "Concluída"].includes(status);
const taskFound = await Task.findOne({ _id: id, userId: authUser });

if(taskFound) {
	
	if(!isStatus)
		return { isStatus }

	taskFound.status = status || taskFound.status;

	updatedTaskStatus = await taskFound.save();

	return { updatedTaskStatus, isStatus }
}

	return { updatedTaskStatus }
	
}
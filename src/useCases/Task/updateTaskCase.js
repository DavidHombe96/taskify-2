import { Task } from "../../models/Task.js";

export const updateTaskCase = async(taskIdParmsDTO ,updateTaskDTO, authUser) => {
	const { id } = taskIdParmsDTO
	let updatedTask = null;

	const taskFounded =  await Task.findOne({_id: id, userId: authUser});

	const allowedPriorityField = ['Necessária','Importante','Urgente']
  const allowedStatusFields = ["Pendente", "Concluída"]

	if(taskFounded) { 

		let statusValue = updateTaskDTO.status === undefined ? taskFounded.status : updateTaskDTO.status
		let priorityValue = updateTaskDTO.priority === undefined ? taskFounded.priority : updateTaskDTO.priority

		let isStatus =  allowedStatusFields.includes(statusValue)
		let isPriority = allowedPriorityField.includes(priorityValue)

		if(!isPriority || !isStatus) {
			return {
				isPriority,
				isStatus,
			}
		}

		const updatedFields = {
			title: updateTaskDTO.title || taskFounded.title,
			description: updateTaskDTO.description || taskFounded.description,
			priority: updateTaskDTO.priority || priorityValue,
			status: updateTaskDTO.status || statusValue,
			updatedAt: Date.now(),
		};

			updatedTask = await Task.findOneAndUpdate(
			{ _id: id, userId: authUser },
			updatedFields,
			{
				new: true,
				runValidators: true,
			}
		);

		return {
			updatedTask,
			isPriority,
			isStatus
		}
	 }

	 return { updatedTask};

	
}
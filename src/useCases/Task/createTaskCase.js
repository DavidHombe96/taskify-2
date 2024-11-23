import { Task } from "../../models/Task.js"

export const createTaskCase = async(createTaskDTO, authUser) => {

	const allowedPriorityField = ['Necessária','Importante','Urgente']
  const allowedStatusFields = ["Pendente", "Concluída"]

	let isStatus =  allowedStatusFields.includes(createTaskDTO.status)
	let isPriority = allowedPriorityField.includes(createTaskDTO.priority)

	if(!isPriority || !isStatus) {
		return {
			isPriority,
			isStatus,
		}
	}

	const newTask = await Task.create({
		title: createTaskDTO.title,
		description: createTaskDTO.description,
		priority: createTaskDTO.priority,
		status: createTaskDTO.status,
		userId: authUser,
	});

	return {
		newTask,
		isPriority,
		isStatus
	}

}
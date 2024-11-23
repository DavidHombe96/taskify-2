import { Task } from "../../models/Task.js";

export const deleteTaskCase = async(idPramsTask, authUser) => {
	
	const taskFounded =  await Task.findOne({_id: idPramsTask.id, userId: authUser});
	let deletedTask = null

	if(taskFounded) {

		deletedTask = await Task.findOneAndDelete({
			_id: idPramsTask.id,
			userId: authUser,
		});

		return deletedTask
	}
	

	return deletedTask

}
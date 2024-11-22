import { Task } from "../models/Task.js";
import { appErr } from "../utils/appErr.js";

export const createTaskController = async (req, res, next) => {
	const { title, description, priority, status } = req.body;
	try {

		const allowedPriorityField = ['Necessária','Importante','Urgente']

		if (!allowedPriorityField.includes(priority)) {
			res.status(404).json({
				message: "Aplicação só permite as prioridades Necessária ,Importante e Urgente",
			});
		}

		const allowedStatusFields = ["Pendente", "Concluída"]

		if (!allowedStatusFields.includes(status)) {
			res.status(404).json({
				message: "Aplicação só permite os status Pendente ou Concluída",
			});
		}

		const newTask = await Task.create({
			title,
			description,
			priority,
			status,
			userId: req.authUser,
		});

		if (!newTask) {
			return next(
				appErr("Não foi possível criar a tarefa", 400)
			);
		}

		res.status(201).json({
			status: true,
			data: newTask,
		});
	} catch (error) {
		next(appErr(error.message));
	}
};

export const getTasksController = async (req, res, next) => {
	try {
		const tasks = await Task.find({ userId: req.authUser});

		if (tasks.length == 0) return next(appErr("Nenhuma tarefa encontrada", 404));

		res.status(200).json({
			message: true,
			message: tasks,
		});
	} catch (error) {
		res.json(error.message);
	}
};

export const getTaskController = async (req, res, next) => {
	try {
		const { id } = req.params;

		const taskFounded = await Task.findOne({_id: id, userId: req.authUser});

		if (!taskFounded) return next(appErr("Tarefa não encontrada, pode ser que não tenhas permissão", 404));

		res.status(200).json({
			status: true,
			data: taskFounded,
		});
	} catch (error) {
		res.json(error.message);
	}
};

export const updateTaskController = async (req, res, next) => {
	const { id } = req.params;
	const { title, description, priority, status } = req.body;
	try {

		console.log("Id: ", id)
		console.log("Auth User: ", req.authUser)

		const allowedPriorityField = ['Necessária','Importante','Urgente']

		if (!allowedPriorityField.includes(priority)) {
			res.status(404).json({
				message: "Aplicação só permite as prioridades Necessária ,Importante e Urgente",
			});
		}

		const allowedStatusFields = ["Pendente", "Concluída"]

		if (!allowedStatusFields.includes(status)) {
			res.status(404).json({
				message: "Aplicação só permite os status Pendente ou Concluída",
			});
		}

		const updatedFields = {
			title: title || undefined,
			description: description || undefined,
			priority: priority || undefined,
			status: status || undefined,
			updatedAt: Date.now()
		}

		const updatedTask = await Task.findOneAndUpdate(
			{ _id: id, userId: req.authUser},
			updatedFields,
			{
				new: true,
				runValidators:true
			}
		)

		if (!updatedTask) return next(appErr("Tarefa não encontrada, pode ser que não tem permissão para atualizar", 404));

		res.status(200).json({
			status: true,
			data: updatedTask,
		});
	} catch (error) {
		res.json(error.message);
	}
};

export const changeTaskStatus = async (req, res) => {
	try {
		const { id } = req.params;
		const { status } = req.body;

		if (!["Pendente", "Concluída"].includes(status)) {
			res.status(404).json({
				message: "Aplicação só permite os status Pendente ou Concluída",
			});
		}

		const taskFound = await Task.findOne({ _id: id, userId: req.authUser })

		if (!taskFound) {
			res.status(404).json({
				message: "Tarefa não encontrada",
			});
		}

		taskFound.status = status || taskFound.status

		const updatedTaskStatus = await taskFound.save();



		res.status(200).json({
			status: true,
			data: updatedTaskStatus,
		});
	} catch (error) {
		res.json(error.message || "Erro ao atualizar a tarefa" );
	}
};

export const deleteTaskController = async (req, res) => {
	try {
		const { id } = req.params;

		console.log("ID: ",id)

		 const deletedTask =await Task.findOneAndDelete({ _id: id, userId: req.authUser});

		if (!deletedTask) {
			res.status(404).json({
				message: "Tarefa não encontrada",
			});
		}

		res.status(204).json({
			status: true,
			message: "Tarefa apagada",
		});
	} catch (error) {
		res.json(error.message || "Erro ao apagar a tarefa");
	}
};

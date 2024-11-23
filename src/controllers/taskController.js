import { Task } from "../models/Task.js";
import { changeTaskStatusCase } from "../useCases/Task/changeTaskStatusCase.js";
import { createTaskCase } from "../useCases/Task/createTaskCase.js";
import { deleteTaskCase } from "../useCases/Task/deleteTaskCase.js";
import { getTaskCase } from "../useCases/Task/getTaskCase.js";
import { getTasksCase } from "../useCases/Task/getTasksCase.js";
import { updateTaskCase } from "../useCases/Task/updateTaskCase.js";
import { appErr } from "../utils/appErr.js";

export const createTaskController = async (req, res, next) => {
	try {
		const { newTask, isStatus, isPriority } = await createTaskCase(
			req.body,
			req.authUser
		);

		if (!isPriority) {
			res.status(404).json({
				message:
					"Aplicação só permite as prioridades Necessária ,Importante e Urgente",
			});
		}

		if (!isStatus) {
			res.status(404).json({
				message: "Aplicação só permite os status Pendente ou Concluída",
			});
		}

		if (!newTask) {
			return next(appErr("Não foi possível criar a tarefa", 400));
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
		const tasks = await getTasksCase(req.query, req.authUser);

		if (tasks.length == 0)
			return next(appErr("Nenhuma tarefa encontrada", 404));

		res.status(200).json({
			success: true,
			data: tasks,
		});
	} catch (error) {
		res.json(error.message);
	}
};

export const getTaskController = async (req, res, next) => {
	try {
		const taskFounded = await getTaskCase(req.params, req.authUser);

		if (!taskFounded)
			return next(
				appErr("Tarefa não encontrada, pode ser que não tenhas permissão", 404)
			);

		res.status(200).json({
			success: true,
			data: taskFounded,
		});
	} catch (error) {
		if (error.name === "CastError") {
			return res.status(400).json({
				success: false,
				message: "Id inválido",
			});
		}
		res.json(error.message);
	}
};

export const updateTaskController = async (req, res, next) => {
	const { updatedTask, isPriority, isStatus } = await updateTaskCase(
		req.params,
		req.body,
		req.authUser
	);
	try {

		if (!updatedTask)
			return next(
				appErr(
					"Tarefa não encontrada, pode ser que não tem permissão para atualizar",
					404
				)
			);

		if (!isPriority) {
			res.status(404).json({
				message:
					"Aplicação só permite as prioridades Necessária ,Importante e Urgente",
			});
		}

		if (!isStatus) {
			res.status(404).json({
				message: "Aplicação só permite os status Pendente ou Concluída",
			});
		}

		res.status(200).json({
			success: true,
			data: updatedTask,
		});
	} catch (error) {
		if (error.name === "CastError") {
			return res.status(400).json({
				success: false,
				message: "Id inválido",
			});
		}
		res.json(error.message);
	}
};

export const changeTaskStatus = async (req, res, next) => {
	try {

		const { updatedTaskStatus, isStatus  } = await changeTaskStatusCase(req.params, req.body, req.authUser)

		if (!updatedTaskStatus) {
			res.status(404).json({
				message: "Tarefa não encontrada",
			});
		}

		if (!isStatus) {
			res.status(404).json({
				message: "Aplicação só permite os status Pendente ou Concluída",
			});
		}

		res.status(200).json({
			success: true,
			data: updatedTaskStatus,
		});
	} catch (error) {
		if (error.name === "CastError") {
			return res.status(400).json({
				success: false,
				message: "Id inválido",
			});
		}
		next(appErr(error.message));
	}
};

export const deleteTaskController = async (req, res, next) => {
	try {
		const deletedTask = await deleteTaskCase(req.params, req.authUser)

		if (!deletedTask) {
			res.status(404).json({
				message: "Tarefa não encontrada",
			});
		}

		res.status(200).json({
			success: true,
			message: "Tarefa apagada",
		});
	} catch (error) {
		if (error.name === "CastError") {
			return res.status(400).json({
				success: false,
				message: "Id inválido",
			});
		}
		next(appErr(error.message));
	}
};

import express from "express";
import  {dbConnect}  from "./database/database.js";
import { userRouter } from "./routes/userRoutes.js";
import { taskRouter } from "./routes/taskRoutes.js";
import { globalErrHandler } from "./middleware/globalErrHandler.js";

const startServer = () => {
	const app = express();
	const PORT = process.env.PORT || 50001;

	app.use(globalErrHandler)
	app.use(express.json());

	// Routas
	app.use("/api/v1/users", userRouter);
	app.use("/api/v1/tasks", taskRouter);

	//  Erro: 404
	app.use("*", (req, res) => {
		res.status(404).json({
			message: `${req.originalUrl} - Routa não encontrada!`,
		});
	});

	app.listen(PORT, () => {
		console.log(`🚀 Servidor a rodar no endereço:http://localhost:${PORT}`);
	});
};

// Database
dbConnect()
	.then(startServer)
	.catch(() => process.exit(1));

import express from "express";
import  {dbConnect}  from "./database/database.js";
import { userRouter } from "./routes/userRoutes.js";
import { taskRouter } from "./routes/taskRoutes.js";
import { globalErrHandler } from "./middleware/globalErrHandler.js";
import cors from "cors"
import { setupSwagger } from "./swagger.js";

const startServer = () => {
	const app = express();
	const PORT = process.env.PORT || 5001;

	
	// ConfiguraçÕes do Swagger
	setupSwagger(app);

	// Middlewares
	app.use(globalErrHandler)
	app.use(express.json());
	app.use(cors());

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
		process.env.ENVIRONMENT_ENV === "PRODUCTION" ?
			console.log(`🚀 Servidor a rodar na porta ${PORT}`) :
			console.log(`🚀 Servidor a rodar no endereço:http://localhost:${PORT}`);
			console.log(`📄 Swager a rodar no endereço:http://localhost:${PORT}/api/v1/api-docs`);
	});
};

// Database
dbConnect()
	.then(startServer)
	.catch(() => process.exit(1));

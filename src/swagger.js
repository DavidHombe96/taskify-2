import fs from "fs";

const swaggerDoc = JSON.parse(
  fs.readFileSync(new URL("../swagger.json", import.meta.url))
);

import swaggerUi from "swagger-ui-express"

export const setupSwagger = (app) =>  {
	app.use("/api/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc))
}
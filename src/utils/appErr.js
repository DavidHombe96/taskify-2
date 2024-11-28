export function appErr(res, message, statusCode) {
	let error = new Error(message);

	error.statusCode = statusCode ? statusCode : 500;
	error.stack = error.stack;

	return res.status(error.statusCode).json({
		code: error.statusCode,
		message: error.message,
		stack: error.stack.split("\n").slice(1).join("\n")
	});
}
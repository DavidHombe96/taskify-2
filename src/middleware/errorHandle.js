export const errorMiddleware = (err, req, res, next) => {
	const statusCode = err.statusCode || 500
	res.statusCode(statusCode).json({
		sucess:false,
		message: err.message || 'Aconteceu um erro'
	})
}
import { getTokenFromHeader } from "../utils/getTokenFromHeader.js"
import { verifyToken } from "../utils/verifyToken.js"


export const isLogin = (req, res, next) => {
	const token = getTokenFromHeader(req)
	const decodedUser = verifyToken(token)

	req.authUser = decodedUser.id

	if(!decodedUser) {
		res.status(404).json({ message: "Inválido token, loga novamente!"})
	} else (
		next()
	)

}
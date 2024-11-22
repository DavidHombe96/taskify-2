import mongoose from 'mongoose';
import 'dotenv/config'

const mongoDB =  process.env.ENVIRONMENT_ENV === "PRODUCTION" ?
								 process.env.MONGODB_URL_CLOUD : process.env.MONGODB_URL_LOCAL

export const dbConnect = async ()=> {
	try {
		await mongoose.connect(mongoDB)
		console.log('🎲 Banco de dados connectado com sucesso!')
	} catch (error) {
		if (error instanceof Error) {
			console.error('Erro ao se conectar ao banco de dados:',  error.message);
		} else {
			console.error('Erro desconhecido:', error);
		}
	}
}
import mongoose from 'mongoose';
import 'dotenv/config'

export const dbConnect = async ()=> {
	try {
		await mongoose.connect(process.env.MONGODB_URL_LOCAL)
		console.log('🎲 Banco de dados connectado com sucesso!')
	} catch (error) {
		if (error instanceof Error) {
			console.error('Erro ao se conectar ao banco de dados:',  error.message);
		} else {
			console.error('Erro desconhecido:', error);
		}
	}
}
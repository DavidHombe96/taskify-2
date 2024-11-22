import { Schema, model } from "mongoose"

export const Task = model("Task", new Schema({
	title: {
		type: String,
		required: [true, "Preencha o campo nome"]

	},
	description: {
		type: String,
		required: [true, "Preencha o campo descrição"]

	},
	priority: {
    type:String,
    enum: ['Necessária','Importante','Urgente'],
    default:'Necessária',
  },
	status: {
    type:String,
    enum: ['Pendente','Concluída'],
    default:'Pendente',
  },
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User"
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
	}

}))
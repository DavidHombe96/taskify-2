import { Schema, model } from "mongoose"

export const User = model("User", new Schema({
	firstname: {
		type: String,
		required: [true, "First name is required"]

	},
	lastname: {
		type: String,
		required: [true, "Last name is required"]

	},
	email: {
		type: String,
		unique:true,
		required: [true, "Email is required"]

	},
	password: {
		type: String,
		required: [true, "Password is required"]

	},
	tasks: [{
		type: Schema.Types.ObjectId,
		ref:"Task"

	}],
	createdAt:{
		type: Date,
		default: Date.now
	},
	updatedAt:{
		type: Date,
		default: null
	}

}))
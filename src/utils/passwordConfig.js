import bcrypt from "bcryptjs";

export const hashedPassword = password => {
	const salt = bcrypt.genSaltSync(10);
	return bcrypt.hashSync(password, salt);
}

export const comparePassword = (password, hashedUserPassord) => {
	return bcrypt.compare(password, hashedUserPassord);
}
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
		email: {
			type: String,
		},
		type: {
			type: String,
		},
		
	},
);
// console.log(mongoose.models)
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;

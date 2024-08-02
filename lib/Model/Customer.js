import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
	name: {
		type: String,
	},

	email: {
		type: String,
	},
	phone: {
		type: String,
	},

	address: {
		type: String,
	},

	city: {
		type: String,
	},

	postCode: {
		type: String,
	},
});

const Customer = mongoose.models.Customer || mongoose.model("Customer", CustomerSchema);

export default Customer;

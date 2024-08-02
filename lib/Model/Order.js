import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
	totalPrice: {
		type: Number,
	},

	items: {
		type: [
			{
				id: { type: String, },

				pageTitle: { type: String, },
			},
		],
	},

	payment_id: {
		type: String,
	},

	customer_id: {
		type: mongoose.Types.ObjectId,
		ref: "Customer",
	},
});

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default Order;

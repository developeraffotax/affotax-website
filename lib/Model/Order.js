import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
	totalPrice: {
		type: Number,
	},

	orderNumber: {
		type: String
	},

	company_name: {
		type: String
	},

	items: {
		type: [
			{
				priceId: { type: String, },

				pageTitle: { type: String, },

				addOns: [{ priceTitle: String, price: String, isChecked: {
					type: Boolean,
				} }],
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

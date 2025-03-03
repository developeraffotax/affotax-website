import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
	totalPrice: {
		type: String,
	},

	vat: {
		type: String,
	},

	totalPriceWithoutVat: {
		type: String,
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
				priceId: { type: String, },    // was used before to access price form direct server || security purpose

				pageTitle: { type: String, },


				priceTitle: { type: String, },
				price: {type: String},


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

	payment_status: {
		type: String,
	},

});

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default Order;







































// import mongoose from "mongoose";

// const OrderSchema = new mongoose.Schema({
// 	totalPrice: {
// 		type: Number,
// 	},

// 	orderNumber: {
// 		type: String
// 	},

// 	company_name: {
// 		type: String
// 	},

// 	items: {
// 		type: [
// 			{
// 				priceId: { type: String, },

// 				pageTitle: { type: String, },

// 				addOns: [{ priceTitle: String, price: String, isChecked: {
// 					type: Boolean,
// 				} }],
// 			},
// 		],
// 	},

// 	payment_id: {
// 		type: String,
// 	},

// 	customer_id: {
// 		type: mongoose.Types.ObjectId,
// 		ref: "Customer",
// 	},

// 	payment_status: {
// 		type: String,
// 	},

// });

// const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

// export default Order;
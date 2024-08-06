import mongoose from "mongoose";

const OrderNumberSchema = new mongoose.Schema({
	orderNumber: {
        type: Number
    }

	
});

const OrderNumber = mongoose.models.OrderNumber || mongoose.model("OrderNumber", OrderNumberSchema);

export default OrderNumber;

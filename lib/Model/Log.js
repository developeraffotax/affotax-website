import mongoose from "mongoose";


const CardSchema = new mongoose.Schema({
    brand: {
        type: String,
    },

    country: {
        type: String,
    },
    exp_month: {
        type: String,
    },

    exp_year: {
        type: String,
    },

    last4: {
        type: String,
    },

    

});


const LogSchema = new mongoose.Schema({
    decline_code: {
        type: String,
    },

    message: {
        type: String,
    },
    customer_name: {
        type: String,
    },

    customer_email: {
        type: String,
    },

    isRead: {
        type: Boolean,
    },

    card: CardSchema

});

const Log = mongoose.models.LOG || mongoose.model("Log", LogSchema);

export default Log;

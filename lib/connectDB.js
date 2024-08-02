import mongoose from "mongoose";



export async function connectDB() {
   try {
    const db = await mongoose.connect('mongodb+srv://affotax:OdKtIdUbr1DGbfik@cluster0.2yezrio.mongodb.net/affotax?retryWrites=true&w=majority&appName=Cluster0')
    console.log('connected to mongodb')
    return db;
   } catch (error) {
    console.log(error)
   }
}



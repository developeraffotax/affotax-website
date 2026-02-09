import mongoose from "mongoose";

// import dns from "dns";

// // 🔥 Force Google DNS for Node process
// dns.setServers([
//   "8.8.8.8",
//   "8.8.4.4",
// ]);


export async function connectDB() {
   try {
    const db = await mongoose.connect(process.env.MONGO_URI)
    console.log('connected to mongodb')
    return db;
   } catch (error) {
    console.log(error)
   }
}



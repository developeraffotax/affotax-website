
import mongoose from "mongoose";

export async function connectDB() {
   try {
    const db = await mongoose.connect(process.env.MONGO_URI)
    console.log('connected to mongodb')
    return db;
   } catch (error) {
    console.log(error)
   }
}







// import mongoose from "mongoose";
// import dns from "dns";
// dns.setServers([ "8.8.8.8", "8.8.4.4" ]);
 
// export async function connectDB() {
//    try {
//     const db = await mongoose.connect(process.env.MONGO_URI, {
//       serverSelectionTimeoutMS: 30000, // 30s timeout
//       family: 4, // force IPv4

//     })
//     console.log('connected to mongodb')
//     return db;
//    } catch (error) {
//     console.log(error)
//    }
// }


















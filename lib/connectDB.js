import mongoose from "mongoose";



/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */

let cached = global._mongoose;

if (!cached) {
  cached = global._mongoose = {
    conn: null,
    promise: null,
  };
}

export async function connectDB() {

  const MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    throw new Error("❌ Please define MONGO_URI in .env");
  }


  // ✅ If already connected, return it
  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }

  // ✅ If connection is in progress, wait for it
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGO_URI, {
        bufferCommands: false,
        maxPoolSize: 10, // better pooling
      })
      .then((mongooseInstance) => {
        console.log("✅ MongoDB Connected");
        return mongooseInstance;
      })
      .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
        cached.promise = null; // reset promise on failure
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}




 




// import mongoose from "mongoose";

// export async function connectDB() {
//    try {
//     const db = await mongoose.connect(process.env.MONGO_URI)
//     console.log('connected to mongodb')
//     return db;
//    } catch (error) {
//     console.log(error)
//    }
// }



 
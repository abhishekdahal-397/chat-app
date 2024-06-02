import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

if(!MONGODB_URI){
    console.log("hello");
    
}

// Define a TypeScript interface for the global object to include our custom mongoose property
declare global {
  var mongoose: {
    conn: mongoose.Mongoose | null;
    promise: Promise<mongoose.Mongoose> | null;
  };
}

// Initialize the global mongoose object if it doesn't exist
global.mongoose = global.mongoose || { conn: null, promise: null };

async function connectToDatabase() {
  if (global.mongoose.conn) {
    return global.mongoose.conn;
  }

  if (!global.mongoose.promise) {
    global.mongoose.promise = mongoose.connect(MONGODB_URI, {
      // You can specify other options here if needed
    });
  }

  global.mongoose.conn = await global.mongoose.promise;
  return global.mongoose.conn;
}

export default connectToDatabase;

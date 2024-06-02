import mongoose from "mongoose";
const MONGO_URL=process.env.MONGODB_URI;
export default async function connectDB(){
  try{
    await mongoose.connect(MONGO_URL as string);
    console.log("connected to database");


  }catch(error){
    console.error("error connecting to the database: ",error);
    process.exit(1);

  }
}

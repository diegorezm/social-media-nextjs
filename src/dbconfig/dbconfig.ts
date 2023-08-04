import mongoose from "mongoose";
export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on('connected', () => {
        console.log('Mongodb connected!')
    });
    connection.on('error',(err) => {
      console.log('Connection error! Make sure mongo db is running!')
      console.log(err)
      process.exit();
    })
  } catch (error) {
   console.log('Something went wrong!'); 
   console.log(error);
  } 
}

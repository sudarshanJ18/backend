import mongoose from "mongoose";

mongoose.set('strictQuery', true);

export const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((c) => {
      console.log(`Mongodb connected to: ${c.connection.host}`);
      console.log("database connected")
    })
    .catch((e) => {
      console.log(e);
      console.log("Failed to connect to the database");
    });
};

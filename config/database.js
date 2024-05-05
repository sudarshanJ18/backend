import mongoose from "mongoose";
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);


export const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((c) => {
      console.log(`Mongodb connect to: ${c.connection.host}`);
      console.log("database conected")
    })
    .catch((e) => {
      console.log(e);
      console.log("Sudarshan Reddy");
    });

};
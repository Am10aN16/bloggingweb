const mongoose = require("mongoose");
const DB = process.env.DATABASE;

const dbconnection = async() => {
  try {
   await mongoose.connect(DB , {
 
   });
   console.log(`Connection Success`);
  } catch (error) {
    console.log(error);
  }
}

  module.exports = dbconnection;
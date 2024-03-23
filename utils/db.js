const mongoose = require('mongoose');
const dotenv = require('dotenv');

const URI = process.env.DATABASE
// mongoose.connect()

const connectDB = async ()=>{
  try {
    await mongoose.connect(URI)
    console.log('Connection Successfully....');
  } catch (error) {
    console.log('Connection failed');
    process.exit(0);
  }
}
module.exports = connectDB;
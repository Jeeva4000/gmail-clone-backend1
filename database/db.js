import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
//   const DB_NAME = 'email'; // Replace with your actual database name
//   const CLUSTER_URL = 'mongodb+srv://Jeeva:Jeeva12345@cluster0.7wb6jvt.mongodb.net/email?retryWrites=true&w=majority'; 

  const MONGO_URL =process.env.MONGO_URL;
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error while connecting with the database:', error);
  }
};

export default Connection;

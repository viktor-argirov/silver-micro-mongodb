import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Fonction pour connecter à la base de données MongoDB
 */
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Retirer les options obsolètes
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
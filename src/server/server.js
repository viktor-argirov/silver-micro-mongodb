import dotenv from 'dotenv';
import app from './app.js'; // Assurez-vous que le chemin est correct
import connectDB from './config/db.js';

dotenv.config();

// Connexion à MongoDB
connectDB();

const PORT = process.env.PORT || 3000;

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
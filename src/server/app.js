import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import reservationRoutes from './routes/reservationRoutes.js';
import errorHandler from './middleware/errorHandler.js';

// Charger les variables d'environnement
dotenv.config();

const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Middleware de sécurité
app.use(helmet());
app.use(cors());

// Utilisation des routes
app.use('/api/auth', authRoutes); // Assure-toi que cette ligne est présente
app.use('/api', reservationRoutes);


// Middleware de gestion des erreurs
app.use(errorHandler);

export default app;
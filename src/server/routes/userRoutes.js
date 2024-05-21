// src/server/routes/userRoutes.js
import { Router } from 'express';
const router = Router();

// Exemple de contrôleurs (à créer dans le fichier correspondant)
import { getUser, addUser } from '../api/userController.js';

router.get('/users', getUser);
router.post('/users', addUser);

export default router;
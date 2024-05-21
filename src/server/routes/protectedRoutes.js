import express from 'express';
import { authenticateUser } from '../middleware/authMiddleware.js';
import someProtectedController from '../controllers/someProtectedController.js';

const router = express.Router();

/**
 * Route protégée exemple
 * @route GET /api/protected/data
 * @group Protected - Routes nécessitant une authentification
 * @returns {object} 200 - Données protégées
 * @returns {Error} 401 - Authentication required
 */
router.get('/data', authenticateUser, someProtectedController.getData);

export default router;
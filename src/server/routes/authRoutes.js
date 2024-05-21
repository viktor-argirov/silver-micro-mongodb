import express from 'express';
import { registerUser } from '../controllers/userController.js';
import { loginUser, logoutUser } from '../controllers/authController.js';

const router = express.Router();

/**
 * Route pour enregistrer un nouvel utilisateur
 * @route POST /api/auth/register
 * @group Auth - Opérations liées à l'authentification
 * @param {string} body.body.required - Les données d'enregistrement d'utilisateur
 * @returns {object} 201 - L'utilisateur créé
 * @returns {Error} 400 - InvalidData ou EmailExists
 * @returns {Error} 500 - ServerError
 */
router.post('/register', registerUser);

/**
 * Route POST pour la connexion de l'utilisateur.
 * @route POST /api/auth/login
 * @group Auth - Opérations liées à l'authentification
 * @param {string} email.body.required - Email de l'utilisateur
 * @param {string} password.body.required - Mot de passe de l'utilisateur
 * @returns {object} 200 - Token JWT si la connexion est réussie
 * @returns {Error} 401 - Identifiants invalides
 * @returns {Error} 500 - Erreur serveur
 */
router.post('/login', loginUser);

/**
 * Route POST pour la déconnexion de l'utilisateur.
 * @route POST /api/auth/logout
 * @group Auth - Opérations liées à l'authentification
 * @returns {object} 200 - Message de succès
 * @returns {Error} 500 - ServerError
 */
router.post('/logout', logoutUser);

export default router;
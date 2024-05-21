import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import redisClient from '../config/redisClient.js';

/**
 * Contrôleur pour gérer la connexion de l'utilisateur.
 * @param {Request} req - La requête HTTP
 * @param {Response} res - La réponse HTTP
 * @returns {Promise<void>}
 */
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Vérifier si l'utilisateur existe dans la base de données
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Vérifier si le mot de passe est correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Préparer les données pour le payload
    const payload = {
      id: user._id,
      roles: user.roles
    };

    // Générer un token JWT
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRY,
    });

    // Envoyer le token au client
    res.json({ token });
  } catch (error) {
    // En cas d'erreur serveur, envoyer un message d'erreur
    res.status(500).json({ error: 'Server error' });
  }
};
/**
 * Contrôleur pour gérer la déconnexion de l'utilisateur.
 * @param {Object} req - La requête HTTP
 * @param {Object} res - La réponse HTTP
 * @returns {Promise<void>}
 */
export const logoutUser = async (req, res) => {
  console.log('LogoutUser');
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    console.log('TokenMissing');
    return res.status(401).send({ error: 'TokenMissing', message: 'Token is required for logout' });
  }
  console.log('Token', token);

  try {
    console.log('VerifyToken');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const expiry = decoded.exp - Math.floor(Date.now() / 1000);

    // Ajouter le token à Redis avec une durée de vie égale à son expiration
    redisClient.set(token, 'invalid', 'EX', expiry);

    res.status(200).send({ message: 'Logout successful' });
  } catch (error) {
    console.log('ServerError', error.message);
    res.status(500).send({ error: 'ServerError', message: 'An error occurred while logging out' });
  }
};
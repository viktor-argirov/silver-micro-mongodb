import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

/**
 * Service pour gérer l'authentification de l'utilisateur.
 * @param {string} email - Email de l'utilisateur
 * @param {string} password - Mot de passe de l'utilisateur
 * @returns {Promise<{token: string}>} - Token JWT si la connexion est réussie
 * @throws {Error} - Si les identifiants sont incorrects
 */
export const authenticateUser = async (email, password) => {
  // Vérifier si l'utilisateur existe dans la base de données
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Invalid email or password');
  }

  // Vérifier si le mot de passe est correct
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid email or password');
  }

  // Générer un token JWT
  const token = jwt.sign({ id: user._id, roles: user.roles }, process.env.JWT_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRY,
  });

  return { token };
};
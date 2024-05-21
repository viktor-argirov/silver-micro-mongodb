import User from '../models/User.js';
import { validateUser } from '../validations/userValidation.js';

/**
 * Contrôleur pour l'enregistrement d'un nouvel utilisateur
 * @param {Object} req - La requête HTTP
 * @param {Object} res - La réponse HTTP
 * @returns {Promise<void>}
 */
export const registerUser = async (req, res) => {
  // Validation des données d'entrée
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send({ error: 'InvalidData', message: error.details[0].message });

  try {
    // Vérifier si l'email existe déjà
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send({ error: 'EmailExists', message: 'Email already exists' });

    // Créer un nouvel utilisateur avec les données fournies
    user = new User(req.body);
    await user.save();

    // Exclure le mot de passe de la réponse
    const userResponse = {
      _id: user._id,
      username: user.username,
      email: user.email,
      roles: user.roles,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      __v: user.__v,
    };

    // Envoyer la réponse avec l'utilisateur créé
    res.status(201).send(userResponse);
  } catch (error) {
    // En cas d'erreur serveur, envoyer un message d'erreur
    res.status(500).send({ error: 'ServerError', message: 'An error occurred while creating the user' });
  }
};
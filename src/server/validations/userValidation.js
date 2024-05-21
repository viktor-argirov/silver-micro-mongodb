import Joi from 'joi';

/**
 * Schéma de validation pour les données d'enregistrement d'utilisateur
 */
const userSchema = Joi.object({
  username: Joi.string().min(3).max(255).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  roles: Joi.array().items(Joi.string()).default(['user'])
});

/**
 * Fonction pour valider les données utilisateur
 * @param {Object} user - Les données de l'utilisateur
 * @returns {Object} - Le résultat de la validation
 */
export const validateUser = (user) => {
  return userSchema.validate(user);
};
import { check, validationResult } from 'express-validator';

/**
 * Middleware de validation pour l'enregistrement des utilisateurs.
 * Vérifie les champs username, email et password.
 */
const validateUser = [
  check('username', 'Username is required').notEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
  
  /**
   * Vérifie les résultats de la validation et renvoie des erreurs si nécessaire.
   * @param {Object} req - Requête Express.
   * @param {Object} res - Réponse Express.
   * @param {Function} next - Fonction suivante dans le middleware.
   */
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

export default validateUser;
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

/**
 * Schéma de l'utilisateur pour la base de données MongoDB
 * @typedef {Object} User
 * @property {string} username - Nom d'utilisateur unique et requis
 * @property {string} email - Adresse email unique et requise
 * @property {string} password - Mot de passe hashé de l'utilisateur
 * @property {Array<string>} roles - Rôles de l'utilisateur
 * @property {Date} createdAt - Date de création de l'utilisateur
 * @property {Date} updatedAt - Date de mise à jour de l'utilisateur
 * @property {string} _id - Identifiant unique de l'utilisateur
 * @property {number} __v - Version du document
 */
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    minlength: 3,
    maxlength: 255
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    maxlength: 255,
    unique: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6
  },
  roles: {
    type: [String],
    default: ['user']
  }
}, { timestamps: true }); // Ajout des timestamps

/**
 * Middleware de pré-sauvegarde pour hasher le mot de passe de l'utilisateur
 * avant de le stocker dans la base de données.
 */
userSchema.pre('save', async function(next) {
  // Ne hasher le mot de passe que s'il a été modifié (ou est nouveau)
  if (!this.isModified('password')) return next();

  try {
    // Générer un sel et hasher le mot de passe
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

/**
 * Modèle de l'utilisateur basé sur le schéma défini
 */
const User = mongoose.model('User', userSchema);

export default User;
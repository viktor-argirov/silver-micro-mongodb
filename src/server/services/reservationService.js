// src/server/services/reservationService.js
import Reservation from '../models/Reservation.js';

/**
 * Créer une nouvelle réservation
 * @param {Object} data - Les données de la réservation
 * @returns {Promise<Object>} - La réservation créée
 */
export const createReservation = async (data) => {
  const newReservation = new Reservation(data);
  return await newReservation.save();
};

/**
 * Obtenir toutes les réservations
 * @returns {Promise<Array>} - Une liste de toutes les réservations
 */
export const getReservations = async () => {
  return await Reservation.find();
};

/**
 * Obtenir une réservation par ID
 * @param {String} id - L'ID de la réservation
 * @returns {Promise<Object>} - La réservation trouvée
 */
export const getReservationById = async (id) => {
  return await Reservation.findById(id);
};

/**
 * Mettre à jour une réservation par ID
 * @param {String} id - L'ID de la réservation
 * @param {Object} updates - Les mises à jour de la réservation
 * @returns {Promise<Object>} - La réservation mise à jour
 */
export const updateReservation = async (id, updates) => {
  return await Reservation.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
};

/**
 * Supprimer une réservation par ID
 * @param {String} id - L'ID de la réservation
 * @returns {Promise<Object>} - La réservation supprimée
 */
export const deleteReservation = async (id) => {
  return await Reservation.findByIdAndDelete(id);
};

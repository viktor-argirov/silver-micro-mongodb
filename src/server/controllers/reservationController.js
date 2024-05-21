// src/server/controllers/reservationController.js
import {
  createReservation as createReservationService,
  getReservations as getReservationsService,
  getReservationById as getReservationByIdService,
  updateReservation as updateReservationService,
  deleteReservation as deleteReservationService
} from '../services/reservationService.js';

/**
 * Créer une nouvelle réservation
 * @param {Object} req - La requête HTTP
 * @param {Object} res - La réponse HTTP
 */
export const createReservation = async (req, res) => {
  try {
    const reservation = await createReservationService(req.body);
    res.status(201).send(reservation);
  } catch (error) {
    res.status(500).send({ error: 'ServerError', message: error.message });
  }
};

/**
 * Obtenir toutes les réservations
 * @param {Object} req - La requête HTTP
 * @param {Object} res - La réponse HTTP
 */
export const getReservations = async (req, res) => {
  try {
    const reservations = await getReservationsService();
    res.status(200).send(reservations);
  } catch (error) {
    res.status(500).send({ error: 'ServerError', message: error.message });
  }
};

/**
 * Obtenir une réservation par ID
 * @param {Object} req - La requête HTTP
 * @param {Object} res - La réponse HTTP
 */
export const getReservationById = async (req, res) => {
  try {
    const reservation = await getReservationByIdService(req.params.id);
    if (!reservation) return res.status(404).send({ error: 'NotFound', message: 'Reservation not found' });
    res.status(200).send(reservation);
  } catch (error) {
    res.status(500).send({ error: 'ServerError', message: error.message });
  }
};

/**
 * Mettre à jour une réservation par ID
 * @param {Object} req - La requête HTTP
 * @param {Object} res - La réponse HTTP
 */
export const updateReservation = async (req, res) => {
  try {
    const reservation = await updateReservationService(req.params.id, req.body);
    if (!reservation) return res.status(404).send({ error: 'NotFound', message: 'Reservation not found' });
    res.status(200).send(reservation);
  } catch (error) {
    res.status(500).send({ error: 'ServerError', message: error.message });
  }
};

/**
 * Supprimer une réservation par ID
 * @param {Object} req - La requête HTTP
 * @param {Object} res - La réponse HTTP
 */
export const deleteReservation = async (req, res) => {
  try {
    const reservation = await deleteReservationService(req.params.id);
    if (!reservation) return res.status(404).send({ error: 'NotFound', message: 'Reservation not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ error: 'ServerError', message: error.message });
  }
};

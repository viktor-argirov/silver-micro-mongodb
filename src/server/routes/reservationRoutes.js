// src/server/routes/reservationRoutes.js
import express from 'express';
import {
  createReservation,
  getReservations,
  getReservationById,
  updateReservation,
  deleteReservation
} from '../controllers/reservationController.js';

const router = express.Router();

/**
 * @route POST /api/reservations
 * @desc Créer une nouvelle réservation
 * @access Public
 */
router.post('/reservations', createReservation);

/**
 * @route GET /api/reservations
 * @desc Obtenir toutes les réservations
 * @access Public
 */
router.get('/reservations', getReservations);

/**
 * @route GET /api/reservations/:id
 * @desc Obtenir une réservation par ID
 * @access Public
 */
router.get('/reservations/:id', getReservationById);

/**
 * @route PUT /api/reservations/:id
 * @desc Mettre à jour une réservation par ID
 * @access Public
 */
router.put('/reservations/:id', updateReservation);

/**
 * @route DELETE /api/reservations/:id
 * @desc Supprimer une réservation par ID
 * @access Public
 */
router.delete('/reservations/:id', deleteReservation);

export default router;

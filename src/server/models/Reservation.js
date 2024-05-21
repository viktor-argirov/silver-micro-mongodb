// Path: src/server/models/Reservation.js
// Compare this snippet from src/server/app.js:

// Importer les modules Express
import mongoose from 'mongoose';

// Définir le schéma de la réservation
const reservationSchema = new mongoose.Schema({
  reservationDateTime: { type: Date, required: true },
  tableNumber: { type: Number, required: true },
  numberOfGuests: { type: Number, required: true }
}, {
  timestamps: true
});

// Création des indices
reservationSchema.index({ reservationDateTime: 1 }); // index simple
reservationSchema.index({ tableNumber: 1 }); // index simple
reservationSchema.index({ reservationDateTime: 1, tableNumber: 1 }); // index composé
reservationSchema.index({ id: 1 }); // index simple


// Créer le modèle de la réservation
const Reservation = mongoose.model('Reservation', reservationSchema);

// Exporter le modèle de la réservation
export default Reservation;

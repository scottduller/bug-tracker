const express = require('express');

const router = express.Router();

const {
  createTicket,
  getTickets,
  getTicketById,
  updateTicketById,
  deleteTicketById,
} = require('./tickets.controllers');

const { protect } = require('../../middleware/authHandler');

router.route('/').post(protect, createTicket).get(protect, getTickets);

router
  .route('/:id')
  .get(protect, getTicketById)
  .put(protect, updateTicketById)
  .delete(protect, deleteTicketById);

module.exports = router;

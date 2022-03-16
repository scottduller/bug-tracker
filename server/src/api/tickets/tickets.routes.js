const express = require('express');

const router = express.Router();

const {
  createTicket,
  getTickets,
  getTicketById,
  updateTicketById,
  deleteTicketById,
} = require('./tickets.controllers');

router.route('/').post(createTicket).get(getTickets);

router
  .route('/:id')
  .get(getTicketById)
  .put(updateTicketById)
  .delete(deleteTicketById);

module.exports = router;

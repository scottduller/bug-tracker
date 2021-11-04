const express = require('express');

const router = express.Router();

const {
  createTicket,
  getTickets,
  getTicketById,
  updateTicketById,
  deleteTicketById,
} = require('../controllers/ticketController');

router.route('/').post(createTicket).get(getTickets);

router
  .route('/:id')
  .get(getTicketById)
  .put(updateTicketById)
  .delete(deleteTicketById);

module.exports = router;

const asyncHandler = require('express-async-handler');
const Ticket = require('./tickets.model');

const errMsgs = {
  notFound: 'Ticket not found.',
};

/**
 * @desc    Create a new ticket
 * @route   POST api/tickets
 * @access  Public
 */
const createTicket = asyncHandler(async (req, res) => {
  res.json({ msg: 'Ticket created' });
});

/**
 * @desc    Get all tickets
 * @route   GET api/tickets
 * @access  Private
 */
const getTickets = asyncHandler(async (req, res) => {
  const tickets = await Ticket.query();
  res.json(tickets);
});

/**
 * @desc    Get ticket by ID
 * @route   GET api/tickets/:id
 * @access  Private
 */
const getTicketById = asyncHandler(async (req, res) => {
  const ticket = await Ticket.query().findById(req.params.id);

  if (ticket) {
    res.json(ticket);
  } else {
    res.status(404);
    throw new Error(errMsgs.notFound);
  }
});

/**
 * @desc    Update ticket by ID
 * @route   PUT api/tickets/:id
 * @access  Private
 */
const updateTicketById = asyncHandler(async (req, res) => {
  const { id, owner_id, project_id, status_id, name, description } = req.body;

  const ticket = await Ticket.query().findById(id);

  if (ticket) {
    const updatedTicket = await Ticket.query().patchAndFetchById(id, {
      owner_id: owner_id || ticket.owner_id,
      project_id: project_id || ticket.project_id,
      status_id: status_id || ticket.status_id,
      name: name || ticket.name,
      description: description || ticket.description,
    });

    res.json(updatedTicket);
  } else {
    res.status(404);
    throw new Error(errMsgs.notFound);
  }
});

/**
 * @desc    Delete ticket by ID
 * @route   DELETE api/tickets/:id
 * @access  Private
 */
const deleteTicketById = asyncHandler(async (req, res) => {
  const ticket = await Ticket.query().findById(req.params.id);

  if (ticket) {
    await Ticket.query().deleteById(req.params.id);
    res.json({ msg: 'Ticket removed' });
  } else {
    res.status(404);
    throw new Error(errMsgs.notFound);
  }
});

module.exports = {
  createTicket,
  getTickets,
  getTicketById,
  updateTicketById,
  deleteTicketById,
};

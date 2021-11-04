const asyncHandler = require('express-async-handler');
const User = require('../models/User');

const errMsgs = {
  notFound: 'User not found.',
};

/**
 * @desc    Login user and get token
 * @route   POST api/users/login
 * @access  Public
 */
const loginUser = asyncHandler(async (req, res) => {
  res.json({ msg: 'Login User' });
});

/**
 * @desc    Register a new user
 * @route   POST api/users
 * @access  Public
 */
const registerUser = asyncHandler(async (req, res) => {
  res.json({ msg: 'Register User' });
});

/**
 * @desc    Get all users
 * @route   GET api/users
 * @access  Private
 */
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.query().select(
    'id',
    'created_at',
    'updated_at',
    'first_name',
    'last_name',
    'bio',
    'email',
    'first_login',
    'last_login'
  );
  res.json(users);
});

/**
 * @desc    Get user by ID
 * @route   GET api/users/:id
 * @access  Private
 */
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.query()
    .findById(req.params.id)
    .select(
      'id',
      'created_at',
      'updated_at',
      'first_name',
      'last_name',
      'bio',
      'email',
      'first_login',
      'last_login'
    );

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error(errMsgs.notFound);
  }
});

/**
 * @desc    Update user by ID
 * @route   PUT api/users/:id
 * @access  Private
 */
const updateUserById = asyncHandler(async (req, res) => {
  const {
    id,
    first_name,
    last_name,
    bio,
    email,
    password,
    first_login,
    last_login,
  } = req.body;

  const user = await User.query().findById(id);

  if (user) {
    const updatedUser = await User.query()
      .patchAndFetchById(id, {
        first_name: first_name || user.first_name,
        last_name: last_name || user.last_name,
        bio: bio || user.bio,
        email: email || user.email,
        password: password || user.password,
        firstLogin: first_login || user.first_login,
        lastLogin: last_login || user.last_login,
      })
      .select(
        'id',
        'created_at',
        'updated_at',
        'first_name',
        'last_name',
        'bio',
        'email',
        'first_login',
        'last_login'
      );

    res.json(updatedUser);
  } else {
    res.status(404);
    throw new Error(errMsgs.notFound);
  }
});

/**
 * @desc    Delete user by ID
 * @route   DELETE api/users/:id
 * @access  Private
 */
const deleteUserById = asyncHandler(async (req, res) => {
  const user = await User.query().findById(req.params.id);

  if (user) {
    await User.query().deleteById(req.params.id);
    res.json({ msg: 'User removed' });
  } else {
    res.status(404);
    throw new Error(errMsgs.notFound);
  }
});

module.exports = {
  loginUser,
  registerUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};

const asyncHandler = require('express-async-handler');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('./users.model');

const errMsgs = {
  notFound: 'User not found.',
  invalidCredentials: 'User credential invalid.',
};

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
 * @desc    Login user and get token
 * @route   POST api/users/login
 * @access  Public
 */
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.query()
    .select('id', 'first_name', 'last_name', 'email', 'password')
    .where('email', email)
    .first();
  console.log(user);

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      {
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '2h',
      }
    );

    res.json({
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      token,
    });
  } else {
    res.status(401);
    throw new Error(errMsgs.invalidCredentials);
  }
});

/**
 * @desc    Register a new user
 * @route   POST api/users
 * @access  Public
 */
const registerUser = asyncHandler(async (req, res) => {
  const schema = Joi.object({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    email: Joi.string().email(),
    password: Joi.string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$/)
      .required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    res.status(401);
    throw new Error(error);
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  try {
    const data = await User.query().insert({
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      email: req.body.email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      {
        firstName: data.first_name,
        lastName: data.last_name,
        email: data.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '2h',
      }
    );

    res.status(200).json({
      firstName: data.first_name,
      lastName: data.last_name,
      email: data.email,
      token,
    });
  } catch (err) {
    res.status(422);
    throw new Error(err.constrant);
  }
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

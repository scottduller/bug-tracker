const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../api/users/users.model');

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // eslint-disable-next-line prefer-destructuring
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.query()
        .findById(decoded.id)
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

      next();
    } catch (error) {
      res.status(401);
      throw new Error(error.stack);
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized');
  }
});

module.exports = {
  protect,
};

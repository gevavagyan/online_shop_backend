const { check } = require('express-validator');
const { User } = require('../models/');

const isAuthorized = (req, res, next) => {
  try {
    console.log(req.body, 'req.body');
    next();
  } catch (e) {
    console.log(e);
  }
};

const signupValidation = [
  check('firstName').not().isEmpty().withMessage('please enter firstName.'),
  check('lastName').not().isEmpty().withMessage('please enter firstName.'),
  check('email').isEmail().not().withMessage('please enter valid email address.').isEmpty()
    .withMessage('please enter valid email address.')
    .custom(async (email) => {
      const user = await User.findOne({ where: { email } });
        if(user) {
          throw new Error('Email already in use');
        }
    }).withMessage('User with this email already exists.'),
  check('password').not().isEmpty().withMessage('please enter password.')
    .isLength({ min: 6 }).withMessage('password must contain at least six characters.'),
  check('confirmPassword').not().isEmpty().withMessage('please enter confirm password.')
    .custom((value, {req}) => { return req.body.password === value})
    .withMessage("password and confirm password don't match.")
];

const signInValidation = [
  check('email').isEmail().not().withMessage('please enter valid email address.').isEmpty()
    .withMessage('please enter valid email address.'),
  check('password').not().isEmpty().withMessage('please enter password.'),
]


module.exports = {
  signupValidation,
  signInValidation,
  isAuthorized,
}

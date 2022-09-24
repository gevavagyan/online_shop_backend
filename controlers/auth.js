const {validationResult} = require("express-validator");
const STATUSES = require('../utils/status_codes');
const { User } = require('../models');
const signUp = async (req, res) => {
  try {
    const errors = validationResult(req)
    if(errors.isEmpty()) {
      const user = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: null,
        email: req.body.email,
        password: req.body.password,
      });
      res.status(STATUSES.SUCCESS_CODE).json({ msg: 'We have sent you a verification link.' });
    } else {
      const error = {};
      errors.errors.forEach((errItem) => error[errItem.param] = errItem.msg);
      res.status(STATUSES.VALIDATION_ERROR_CODE).json(error);
    }

  } catch (e) {
    console.log(e);
    res.status(STATUSES.VALIDATION_ERROR_CODE).json('something went wrong');
  }
};

const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const { email, password } = req.body;
      console.log(email, 'email', password, 'password');
      const user = await User.findOne({ where: { email } } );
      console.log(user, 'user');
      const passwordMatch = user.password === password;
      if (user && passwordMatch) {
        res.status(STATUSES.SUCCESS_CODE).json({ msg: 'success login.' });
      } else if (user && !passwordMatch) {
        res.status(STATUSES.VALIDATION_ERROR_CODE).json({ password: 'Wrong Password' });
      } else {
        res.status(STATUSES.VALIDATION_ERROR_CODE).json({ email: 'wrong Email address' });
      }
    } else {
      const error = {};
      errors.errors.forEach((errItem) => error[errItem.param] = errItem.msg);
      res.status(STATUSES.VALIDATION_ERROR_CODE).json(error);
    }
  } catch (e) {
    res.status(STATUSES.VALIDATION_ERROR_CODE).json('something went wrong');
  }
}

module.exports = {
  signUp,
  login
}

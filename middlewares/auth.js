const { User } = require('../models/');

const isAuthorized = (req, res, next) => {
  try {
    console.log(req.body, 'req.body');
    next();
  } catch (e) {
    console.log(e);
  }
};

const uniqueUser = async (req, res, next) => {
  try {
    console.log('req.body', req.body, 'middleware');

    // const users = await User.findAll({
    //   where: { email: req.body.email },
    //   attributes: ['email']
    // });
    // console.log(users, 'users');
    // const user = await User.findOne({
    //     where: { mail: req.body.email }
    // });
    // if (user) {
    //   return res.status(400).send('User with this email already exists');
    // }
    next();
  } catch (e) {
    console.log(e);
    res.status(400).send('something went wrong');
  }
};

module.exports = {
  isAuthorized,
  uniqueUser
}

const { Router } = require('express');
const { signupValidation, signInValidation } = require('../middlewares/auth')
const { signUp, login } = require('../controlers/auth')

const router = Router();

router.post('/registration', signupValidation, signUp);
router.post('/login', signInValidation, login);

module.exports = router;

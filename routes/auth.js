const { Router } = require('express');
const { isAuthorized, uniqueUser } = require('../middlewares/auth')
const { registration } = require('../controlers/auth')

const router = Router();

router.post('/registration', uniqueUser, registration);


module.exports = router;

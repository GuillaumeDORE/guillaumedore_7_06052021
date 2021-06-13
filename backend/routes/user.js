const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
// const {createAccountLimiter} = require('../middleware/rate-limiter');

router.post('/signup'/* , createAccountLimiter */, userCtrl.signup);
router.post('/login', userCtrl.login);
// jwt
router.post('/jwtid', userCtrl.requireAuth)


module.exports = router;

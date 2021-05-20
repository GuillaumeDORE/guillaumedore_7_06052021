const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/users');
// const {createAccountLimiter} = require('../middleware/rate-limiter');

router.post('/signup'/* , createAccountLimiter */, userCtrl.signup);
// router.post('/login', userCtrl.login);

module.exports = router;

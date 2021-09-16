const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const userCtrl = require('../controllers/user');
const { createAccountLimiter, apiLimiter } = require('../middleware/rate-limiter');

router.post('/signup', createAccountLimiter, userCtrl.signup);
router.post('/login', apiLimiter, userCtrl.login);
router.delete('/delete', auth, apiLimiter, userCtrl.deleteUser);

module.exports = router;

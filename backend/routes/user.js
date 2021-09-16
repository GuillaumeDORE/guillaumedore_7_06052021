const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const userCtrl = require('../controllers/user');
// const {createAccountLimiter} = require('../middleware/rate-limiter');

router.post('/signup'/* , createAccountLimiter */, userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete('/delete', auth, userCtrl.deleteUser);

module.exports = router;

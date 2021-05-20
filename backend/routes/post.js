const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');
// const {createAccountLimiter} = require('../middleware/rate-limiter');

router.post('/'/* , createAccountLimiter */, postCtrl);

module.exports = router;
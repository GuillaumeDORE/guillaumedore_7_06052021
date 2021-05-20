const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/comment');
// const {createAccountLimiter} = require('../middleware/rate-limiter');

router.post('/'/* , createAccountLimiter */, commentCtrl);

module.exports = router;
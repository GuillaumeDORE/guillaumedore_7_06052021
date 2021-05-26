const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const commentCtrl = require('../controllers/comment');
// const {createAccountLimiter} = require('../middleware/rate-limiter');

router.post('/',auth ,/*  createAccountLimiter ,*/ commentCtrl.new_comment);
router.put('/',auth ,/*  createAccountLimiter ,*/ commentCtrl.update_comment);
router.delete('/',auth ,/*  createAccountLimiter ,*/ commentCtrl.delete_comment);
router.get('/',auth ,/*  createAccountLimiter ,*/ commentCtrl.get_all_comment);
router.get('/',auth ,/*  createAccountLimiter ,*/ commentCtrl.get_one_comment);


module.exports = router;
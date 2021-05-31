const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const postCtrl = require('../controllers/post');
// const {createAccountLimiter} = require('../middleware/rate-limiter');

router.post('/',auth ,/*  createAccountLimiter ,*/ postCtrl.new_post);
router.put('/:post_id',auth ,/*  createAccountLimiter ,*/ postCtrl.update_post);
router.delete('/:post_id',auth ,/*  createAccountLimiter ,*/ postCtrl.delete_post);
router.get('/',auth ,/*  createAccountLimiter ,*/ postCtrl.get_all_post);
router.get('/:post_id',auth ,/*  createAccountLimiter ,*/ postCtrl.get_one_post);


module.exports = router;
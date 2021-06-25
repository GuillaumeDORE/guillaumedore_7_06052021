const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const checkCommentUser = require('../middleware/checkCommentUser');
const commentCtrl = require('../controllers/comment');
// const {createAccountLimiter} = require('../middleware/rate-limiter');

router.post('/', auth, /*  createAccountLimiter ,*/ commentCtrl.new_comment);
router.put('/:comment_id', auth, checkCommentUser,/*  createAccountLimiter ,*/ commentCtrl.update_comment);
router.delete('/:comment_id', auth, checkCommentUser,/*  createAccountLimiter ,*/ commentCtrl.delete_comment);
router.get('/', auth,/*  createAccountLimiter ,*/ commentCtrl.get_all_comment);
router.get('/:comment_id', auth,/*  createAccountLimiter ,*/ commentCtrl.get_one_comment);


module.exports = router;
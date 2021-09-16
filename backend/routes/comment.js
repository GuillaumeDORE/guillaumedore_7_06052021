const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const checkCommentUser = require('../middleware/checkCommentUser');
const commentCtrl = require('../controllers/comment');
const { apiLimiter } = require('../middleware/rate-limiter');

router.post('/', auth, apiLimiter, commentCtrl.new_comment);
router.put('/:comment_id', auth, checkCommentUser, apiLimiter, commentCtrl.update_comment);
router.delete('/:comment_id', auth, checkCommentUser, apiLimiter, commentCtrl.delete_comment);
router.get('/:post_id', auth, apiLimiter, commentCtrl.get_all_comment);
router.get('/:comment_id', auth, apiLimiter, commentCtrl.get_one_comment);


module.exports = router;
const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config')

const auth = require('../middleware/auth');
const checkPostUser = require('../middleware/checkPostUser');
const postCtrl = require('../controllers/post');
const { apiLimiter } = require('../middleware/rate-limiter');


router.post('/', auth, apiLimiter, multer, postCtrl.new_post);
router.put('/:post_id', auth, checkPostUser, apiLimiter, multer, postCtrl.update_post);
router.delete('/:post_id', auth, checkPostUser, apiLimiter, postCtrl.delete_post);
router.get('/', auth, apiLimiter, postCtrl.get_all_post);
router.get('/:post_id', auth, apiLimiter, postCtrl.get_one_post);


module.exports = router;
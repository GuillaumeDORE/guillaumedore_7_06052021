const jwt = require('jsonwebtoken');
const Comment = require('../models/Comment');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, `${process.env.TOKEN_SECRET}`);
        const userId = decodedToken.userId;
        const isAdmin = decodedToken.isAdmin;

        Comment.findOne(req.params.comment_id, function (err, result, fields) {
            if (err) {
                res.status(400).json({ err })
                return console.log(err);
            }
            console.log(result);
            const { user_id } = result[0];
            if (isAdmin === 1) {
                next()
            } else if (user_id !== userId) {
                res.status(400).json('User ID différent du postUserId !')
                return console.log('User ID différent du postUserId !');
            } else {
                next()
            }
        })
    }
    catch (error) {
        res.status(401).json({ error: error | 'Requête non authentifiée!' });
    }
};

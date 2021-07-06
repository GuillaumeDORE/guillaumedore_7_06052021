const Comment = require('../models/Comment');

exports.new_comment = (req, res, next) => {
    const { post_Id, userId, content } = req.body.comment
    Comment.insert(post_Id, userId, content, function (err, result, fields) {
        if (err) {
            res.status(400).json({ err })
            return console.log(err);
        }
        res.status(201).json({ message: 'comment créé!' })
        return console.log(result);
    });
};

exports.update_comment = (req, res, next) => {
    Comment.update(req.body.comment.content, req.params.comment_id, function (err, result, fields) {
        if (err) {
            res.status(400).json({ err })
            return console.log(err);
        }
        res.status(200).json({ message: 'comment modifié!' })
        return console.log(result);
    });
};

exports.delete_comment = (req, res, next) => {
    Comment.delete(req.params.comment_id, function (err, result, fields) {
        if (err) {
            res.status(400).json({ err })
            return console.log(err);
        }
        res.status(200).json({ message: 'comment supprimé!!' })
        return console.log(result);
    });
};

exports.get_all_comment = (req, res, next) => {
    Comment.getAll(req.params.post_id, function (err, result, fields) {
        if (err) {
            res.status(400).json({ err })
            return console.log(err);
        }
        res.status(200).json(result)
        return console.log(result);
    });
};

exports.get_one_comment = (req, res, next) => {
    Comment.findOne(req.params.comment_id, function (err, result, fields) {
        if (err) {
            res.status(400).json({ err })
            return console.log(err);
        }
        res.status(200).json(result[0])
        return console.log(result);
    });
};

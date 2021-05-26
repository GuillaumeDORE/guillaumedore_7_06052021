const Comment = require('../models/Comment');

exports.new_Comment = (req, res, next) => {
    Comment.insert(req.body.comment.userId, req.body.comment.title, req.body.comment.content, function (err, result, fields) {
        if (err) {
            res.status(400).json({err})
            return console.log(err);
        }
        res.status(201).json({message: 'comment créé!'})
        return console.log(result);
    });
};

exports.update_comment = (req, res, next) => {
    Comment.update(req.body.comment.title, req.body.comment.content, {comment_id: req.params.comment_id}, function (err, result, fields) {
        if (err) {
            res.status(400).json({err})
            return console.log(err);
        }
        res.status(200).json({message: 'comment modifié!'})
        return console.log(result);
    });
};

exports.delete_comment = (req, res, next) => {
    Comment.delete({comment_id: req.params.comment_id}, function (err, result, fields) {
        if (err) {
            res.status(400).json({err})
            return console.log(err);
        }
        res.status(200).json({message: 'comment supprimé!!'})
        return console.log(result);
    });
};

exports.get_all_comment = (req, res, next) => {
    Comment.getAll( function (err, result, fields) {
        if (err) {
            res.status(400).json({err})
            return console.log(err);
        }
        res.status(200).json(result[0])
        return console.log(result);
    });
};

exports.get_one_comment = (req, res, next) => {
    Comment.findOne({comment_id: req.params.comment_id}, function (err, result, fields) {
        if (err) {
            res.status(400).json({err})
            return console.log(err);
        }
        res.status(200).json(result[0])
        return console.log(result);
    });
};

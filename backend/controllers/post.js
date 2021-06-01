const Post = require('../models/Post');


exports.new_post = (req, res, next) => {
    const { userId, title, content } = req.body.post
    Post.insert(userId, title, content, function (err, result, fields) {
        if (err) {
            res.status(400).json({ err })
            return console.log(err);
        }
        res.status(201).json({ message: 'Post créé!' })
        return console.log(result);
    });
};

exports.update_post = (req, res, next) => {
    const { title, content } = req.body.post
    Post.update(title, content, req.params.post_id, function (err, result, fields) {
        if (err) {
            res.status(400).json({ err })
            return console.log(err);
        }
        res.status(200).json({ message: 'Post modifié!' })
        return console.log(result);
    });
};

exports.delete_post = (req, res, next) => {
    Post.delete(req.params.post_id, function (err, result, fields) {
        if (err) {
            res.status(400).json({ err })
            return console.log(err);
        }
        res.status(200).json({ message: 'Post supprimé!!' })
        return console.log(result);
    });
};

exports.get_all_post = (req, res, next) => {
    Post.getAll(function (err, result, fields) {
        if (err) {
            res.status(400).json({ err })
            return console.log(err);
        }
        res.status(200).json(result)
        return console.log(result);
    });
};

exports.get_one_post = (req, res, next) => {
    Post.findOne(req.params.post_id, function (err, result, fields) {
        if (err) {
            res.status(400).json({ err })
            return console.log(err);
        }
        res.status(200).json(result[0])
        return console.log(result);
    });
};

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passwordValidator = require('password-validator');
const MaskData = require('maskdata');
const connection = require('../connection');
const User = require('../models/User');


let schema = new passwordValidator();
schema
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits(2)                                // Must have at least 2 digits
    .has().not().spaces()                           // Should not have spaces
    .has().symbols()
    .is().not().oneOf(['Passw0rd', 'Password123', 'Azerty123']);

const emailMask2Options = {
    maskWith: "*",
    unmaskedStartCharactersBeforeAt: 3,
    unmaskedEndCharactersAfterAt: 2,
    maskAtTheRate: false
};

exports.signup = (req, res, next) => {
    if (schema.validate(req.body.contact.user_password)) {
        bcrypt.hash(req.body.contact.user_password, 10)
            .then(hash => {
                User.insert(req.body.contact.pseudo, req.body.contact.first_name, req.body.contact.last_name, MaskData.maskEmail2(req.body.contact.email, emailMask2Options), hash, function (err, result, fields) {
                    if (err) {
                        return console.log(err);
                    }
                    return console.log(result);
                });
            })
            .catch(error => res.status(500).json({ error }));
    } else {
        return res.status(400).json({ error: 'Le mot de passe doit faire minimum 8 caractères, un symbol, avoir minimum une majuscule et une minuscule et avoir minimum 2 chiffres. ' });
    }
};

exports.login = (req, res, next) => {
    User.findOne(MaskData.maskEmail2(req.body.login.email, emailMask2Options), function (err, result, fields) {
        if (err) {
            return console.log(err);
        }
        if (result.length === 0) {
            return res.status(401).json({ error: 'Utilisateur non trouvé!' });
        }
        bcrypt.compare(req.body.login.user_password, result[0].user_password)
            .then(valid => {
                if (!valid) {
                    return res.status(401).json({ error: 'Mot de passe incorrect!' });
                }
                res.status(200).json({
                    userId: result[0].user_id,
                    token: jwt.sign({ userId: result[0].user_id },
                        process.env.TOKEN_SECRET, { expiresIn: '24h' }
                    )
                });
            })
            .catch(error => res.status(500).json({ error }))
    })
};
var mongoose = require('mongoose');

var User = require('../app/models/userSchema');

exports.getUserbyEmail = (req, res) => {
    if (req.body.email == undefined) {
        res.status(400);
        res.json("No email specified");
    } else {
        User.findOne({ 'email': req.body.email }, '-password_hash -api_token', function (err, user) {
            if (err) {
                res.json(err);
            } else {
                res.json(user);
            }
        });
    }
}

exports.getUserbyID = (req, res) => {
    if (req.body.user_id == undefined) {
        res.status(400);
        res.json("No user ID specified");
    } else {
        User.findOne({ '_id': req.body.user_id }, '-password_hash -api_token', function (err, user) {
            if (err) {
                res.json(err);
            } else {
                res.json(user);
            }
        });
    }
}

exports.getUserbyAPI = (req, res) => {
    if (req.body.api_token == undefined) {
        res.status(400);
        res.json("No API token specified");
    } else {
        User.findOne({ 'api_token': req.body.api_token }, '-password_hash -api_token', function (err, user) {
            if (err) {
                res.json(err);
            } else {
                res.json(user);
            }
        });
    }
}
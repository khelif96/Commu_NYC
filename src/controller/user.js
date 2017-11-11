var mongoose = require('mongoose');

var User = require('../app/models/userSchema');

exports.getUser = (req, res)=>{
    if (req.body.email == undefined && req.body.user_id == undefined && req.body.api_token == undefined) {
        res.status(400);
        res.json("No user specified");
    } else {
        if (req.body.email != undefined) {
            User.findOne({ 'email': req.body.email }, '-password_hash -api_token', function (err, user) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(user);
                }
            });
        }else if(req.body.user_id != undefined){
            User.findOne({ '_id': req.body.user_id }, '-password_hash -api_token', function (err, user) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(user);
                }
            });
        }else if(req.body.api_token != undefined){
            User.findOne({ 'api_token': req.body.api_token }, '-password_hash -api_token', function (err, user) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(user);
                }
            });
        }
    }
}
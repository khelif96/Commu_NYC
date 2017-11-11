var mongoose = require('mongoose');

var User = require('../app/models/userSchema');

exports.getUser = (req, res)=>{
    if(req.body.email == undefined){
        res.status(400);
        res.json("No email specified");
    }else{
        User.findOne({'email' : req.body.email}, '-password_hash -api_token', function(err, user){
            if(err){
                res.json(err);
            }else{
                res.json(user);
            }
        });
    }
}
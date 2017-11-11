var bcrypt = require('bcryptjs');
var hat = require('hat');

var User = require('../app/models/userSchema');

const saltRounds = 10; // How many times to salt the password

// Configure Hat for generating api tokens
var rack = hat.rack(64,16);

exports.registerUser = (req,res) => {
  if(req.body.email === undefined || req.body.password === undefined){
    res.status(400);
    res.json({error: "Missing email or password in request"});
  }else if (req.body.name.first === undefined || req.body.name.last === undefined){
    res.status(400);
    res.json({error: "Missing name in request"});
  }else{
    User.find({email: new RegExp(req.body.email, 'i')}, function (err,docs){
      if(!docs.length){
        var tempUser = new User();
        tempUser.email = req.body.email;
        tempUser.api_token = rack();
        tempUser.userType = req.body.userType;
        tempUser.name.first = req.body.name.first;
        tempUser.name.last = req.body.name.last;
        bcrypt.hash(req.body.password, saltRounds, function(err,hash){
          tempUser.password_hash = hash;
          tempUser.save(function(err){
            if(err){
            // console.log("ERROR");
              res.send(err);
          }

          res.status(201);
          res.json({"status" : "Successfully Created An Account", "api_token":tempUser.api_token} );
          // res.status(201);
          // res.json({api_token: tempUser.api_token, status: "Successfully Created User"});
        });

      });
      }else{

        res.status(400);
        res.json({error:"Email belongs to another user"});
      }
    });
  }
};

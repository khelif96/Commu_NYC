// opportunity Modification Schema

var Opportunity = require('../app/models/opportunitySchema');
var User = require('../app/models/userSchema');

exports.createOpportunity = (req,res) => {
  if(req.body.title === undefined || req.body.description === undefined || req.body.opportunityDate === undefined){
    res.status(401).json({error: "Incomplete Request Missing required paramaters"});
  }
  User.findOne({api_token: req.body.api_token},function(err,doc){
    if(!doc || err){
      res.status(401).json({error: "Invalid api_token"});
    }else{
      var tempOpportunity = new Opportunity();
      tempOpportunity.title = req.body.title;
      tempOpportunity.description = req.body.description;
      tempOpportunity.opportunityDate = req.body.opportunityDate;
      tempOpportunity.posterId = doc._id;
      tempOpportunity.save(function(err){
        if(err){
          res.status(500).json({error: "Internal Server Error when Creating Opportunity. If this happens again please contact us"});
        }
      });
      doc.eventsCreated.push(tempOpportunity._id);
      doc.save(function(err){
        if(err){
          res.status(500).json({error: "Internal Server Error when Saving the Opportunity to your Account. If this happens again please contact us"});
        }
      });
      res.status(201).json({message: "Successfully Created Opportunity"});
    }
  }
)};

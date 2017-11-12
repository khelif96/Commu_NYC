var Opportunity = require('../app/models/opportunitySchema');

exports.getOpportunities = (req, res) => {
    Opportunity.find({}, function(err, opportunities){
        err? res.json(err) : res.send(opportunities);
    });
}

exports.getOpportunitybyID = (req, res) => {
    Opportunity.findOne({"_id" : req.body.opportunity_id}, function(err, opportunity){
        err? res.json(err) : res.send(opportunity);
    });
}

exports.getOpportunitiesbyVolunteer = (req, res) => {
    var opportunitiesSignedUp = [];
    Opportunity.find({}, function(err, opportunities){
        for(var i = 0; i < opportunities.length; i++){
            if(opportunities[i].volunteer_id.indexOf(req.body.volunteer_id) != -1) opportunitiesSignedUp.push(element);
        }
        res.send(opportunitiesSignedUp);
    });
}
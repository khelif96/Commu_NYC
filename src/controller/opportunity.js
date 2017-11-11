var Opportunity = require('../app/models/opportunitySchema');

exports.getOpportunities = (req, res) => {
    Opportunity.model({}, function(err, opportunity){
        if(err) res.json(err);
        else res.json(opportunity);
    });
}
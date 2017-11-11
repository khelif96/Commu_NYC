var Opportunity = require('../app/models/opportunitySchema');

exports.getOpportunities = (req, res) => {
    Opportunity.find({}, function(err, opportunities){
        if(err) res.json(err);
        else res.send(opportunities);
    });
}
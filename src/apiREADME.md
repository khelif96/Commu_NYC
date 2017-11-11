# Commu_NYC Api

## routes


#### <code>POST</code> /api/registerUser
#####  Input
| Parameter | Type | Required|
|---|---|---|
| name.first | String | True|
| name.last | String | True|
| email | String | True|
| password | String | True|

#####  Outputs
| Parameter | Type | When | Reason |

| error | String | error | If you are missing a Parameter or Email belongs to another user |
| status | String | Success | --- |
| api_token | String | Success| Return an api Token This is required for any auth Requests |
#### <code>POST</code> /api/loginUser
#####  Input

#####  Output

#### <code>POST</code> /api/userInfobyEmail
#####  Input

#####  Output

#### <code>POST</code> /api/userInfobyID
#####  Input

#####  Output

#### <code>GET</code> /api/getOpportunities
#####  Input

#####  Output

#### <code>POST</code> /api/getOpportunitybyID
#####  Input

#####  Output

#### <code>POST</code> /api/getOpportunitiesbyVolunteer
#####  Input

#####  Output


#### <code>POST</code> /api/userInfobyAPI
#### <code>POST</code> /api/createOpportunity
#### <code>POST</code> /api/registerForOpportunity

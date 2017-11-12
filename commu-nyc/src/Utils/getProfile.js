import axios from 'axios';
const baseUrl = "http://localhost:3001/api";

export {getAccountByApiToken};
function getAccountByApiToken(apiToken){
  return axios.post(baseUrl + "/userInfobyAPI",{
    api_token: apiToken
  })
  .then((response) => response.data)
  .catch((error) => {
    alert("Error" + error)
  });
}

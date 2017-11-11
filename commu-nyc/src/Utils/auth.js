import axios from 'axios';
const baseUrl = "http://localhost:3001/api";

export {login};
function login(userName,Password) {
  console.log("Logging in");
  // alert("logging in ");

  return axios.post(baseUrl+"/loginUser", {
      email: userName,
      password: Password
    })
    .then((response) => response.data.api_token )
    .catch( (error) => {
      console.log(error);
      alert("Error " + error);
    });



}
export {register};
function register(Username,Password,FirstName,LastName){
  return axios.post(baseUrl+"/registerUser",{
      email: Username,
      password: Password,
      name : {
        first : FirstName,
        last : LastName
      }
    })
    .then((response) => response.data.api_token )
    .catch( (error) => {
        alert( "this is an error from auth " + error.message);
    });
}

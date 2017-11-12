import React, { Component} from 'react';

import {getAccountByApiToken} from '../Utils/getProfile.js';
import '../Styles/App.css';

class MyAccount extends Component {


  constructor(props){
      super(props);
      this.state = {
        api_token : localStorage.getItem('api_token'),
        name: {
          first: "",
          last: ""
        },
        email: "",
        userType: ""
      }

      // this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);a
      this.getAccountByApiToken = getAccountByApiToken.bind(this);
      this.getAccountInfo = this.getAccountInfo.bind(this);
      // getAccountInfo();
  }

  getAccountInfo(){
     const Api_token = this.state.api_token;
     //call our axios promise, then retrieve the token from axios
     getAccountByApiToken(Api_token)
         .then( account => {
           this.setState({
             name : {
               first :account.name.first,
               last : account.name.last,
             },
             email: account.email,
             userType: account.userType
           });
         })
         .catch( (error) => { localStorage.setItem('api_token',"");
           this.setState({ api_token : ""});
           alert("Error " + error);
         });

     // event.preventDefault();
 }
  render() {
  var styleApiToken = {
      color: 'white',
      fontSize: 15,
      textAlign: 'center',
      padding: 20
    }
    var styleName = {
      color: 'white',
      fontSize: 15,
      textAlign: 'center',
      padding: 20
    }
    var styleApiName = {
        background: 'gray',
        margin: 140,
        borderRadius: 8,
        boxShadow: '3px 3px 3px #888888'
    }
    var styleProfImage2 = {
      width: 100,
      borderRadius: 8,
      paddingBottom: 10
    }
    this.getAccountInfo();
    return(
      <div style = {styleApiName} class="styleApiName">
          <div style = {styleName}>
            <center><img style = {styleProfImage2} src={ require('./profile.jpg') } /></center>
            <p> Welcome to your account, <b> {this.state.name.first}</b></p>
            <h1 style = {styleApiToken}> This is your token: <b>{this.state.api_token}</b></h1>
            <p> Your email is: <b> {this.state.email}</b></p>
            <p> You are a: <b> {this.state.userType}</b></p>
          </div>
      </div>
    );
  }
}

export default MyAccount;

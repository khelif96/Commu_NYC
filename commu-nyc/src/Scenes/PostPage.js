import React, { Component } from 'react';
import '../Styles/App.css';

class PostPage extends Component {

  constructor(props){
      super(props);
  }

  render() {
    var styleVolunCard = {
      background: '#D3D3D3',
      marginLeft: 70,
      marginRight: 70,
      marginTop: 40,
      borderRadius: 8,
      boxShadow: '3px 3px 3px #888888',
      alignContent: 'center',
      paddingBottom: 15
    }
    var styleVolunCardHeader = {
      padding: 30,
      paddingBottom: 10,
      borderTopLeftRadius: 8,
      background: '#4c4c4c',
      borderTopRightRadius: 8,
      boxShadow: '2px 2px 2px gray'
    }
    var styleVolunCardParagraph = {
      padding: 30
    }
    var styleBigHeader =  {
        color : 'white',
        fontSize : 40,
        textAlign : 'left'
    }
    var styleMediumHeader = {
        color: 'white',
        fontSize: 15,
        textAlign: 'left'
    }
    var styleSmallHeader = {
        color : 'black',
        fontSize : 10,
        textAlign : 'left'
    }
    var styleParagraph = {
        color : 'black',
        fontSize: 15,
        textAlign : 'left'
    }
    var styleAcceptButton = {
      background: 'orange',
      color: 'white',
      float: 'right',
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom: 5,
      paddingTop: 5,
      border: 0,
      boxShadow: '2px 2px 2px gray',
      borderRadius: 4
    }
    var styleBackButton = {
      background: '#D3D3D3',
      color: 'black',
      float: 'right',
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom: 5,
      marginRight: 7,
      paddingTop: 5,
      border: 0,
      borderRadius: 4
    }
    return (
          <div>
            <div style = {styleVolunCard} class="VolunCards">

              <div style = {styleVolunCardHeader} class="VolunHeaderCard">
                <div style = {styleBigHeader} id="VolunTitle" > <p><b>{title}</b></p> </div>
                <div style = {styleMediumHeader} id="VolunOrgName"> <p>By: Organization Name </p> </div>
                <div style = {styleMediumHeader} id="VolunDatePosted"> <p>Posted: November 11, 2017 at 11:45AM</p></div>
              </div>

                <div style = {styleVolunCardParagraph} class="VolunParaCards">
                    <div class="VolunParaDescripCard">
                      <div id="VolunParaDescrip">
                        <p style = {styleParagraph}><b> Description:</b> </p>
                      </div>
                      <div id="VolunParaD">
                        <p style ={styleParagraph}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero obcaecati, aut error consectetur adipiscing eli
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero obcaecati, aut error consectetur adipiscing eli
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero obcaecati, aut error consectetur adipiscing eli
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero obcaecati, aut error consectetur adipiscing eli
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero obcaecati, aut error consectetur adipiscing eli
                        </p>
                      </div>
                    </div>

                    <br></br>

                    <div class="VolunParaReqCard">
                      <div id="VolunParaReq">
                        <p style = {styleParagraph}><b>Requirements:</b> </p>
                      </div>
                      <div id="VolunParaR">
                        <p style ={styleParagraph}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero obcaecati, aut error consectetur adipiscing eli
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero obcaecati, aut error consectetur adipiscing eli
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero obcaecati, aut error consectetur adipiscing eli
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero obcaecati, aut error consectetur adipiscing eli
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero obcaecati, aut error consectetur adipiscing eli
                        </p>
                      </div>
                    </div>

                    <br></br>

                    <div>
                      <button style = {styleAcceptButton} class="mdc-button">
                        <i class="material-icons mdc-button"></i>
                          ACCEPT
                      </button>
                    </div>

                    <div>
                      <button style = {styleBackButton} class="mdc-button">
                        <i class="material-icons mdc-button"></i>
                          BACK TO VOLUNTEER PAGE
                      </button>
                   </div>

                </div>
              </div>
          </div>
    );
  }
}

export default PostPage;

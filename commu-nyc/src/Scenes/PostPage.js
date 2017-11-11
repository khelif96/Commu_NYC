import React, { Component } from 'react';
import '../Styles/App.css';

class PostPage extends Component {

  constructor(props){
      super(props);
  }

  render() {
    var styleBigHeader =  {
        color : 'orange',
        fontSize : 100,
        textAlign : 'left'
    }
    var styleSmallHeader = {
        color : 'black',
        fontSize : 20,
        textAlign : 'left'
    }
    var styleParagraph = {
        color : 'black',
        fontSize: 15,
        textAlign : 'left'  
    }

    return (
          <div >
            <div style = {styleBigHeader}> Post Page </div>
            <p style = {styleSmallHeader}>
            by
            <a href="#"> Profile of Person whose uploading the service</a>
            </p>
            <p style ={styleParagraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</p>

            <p style ={styleParagraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>

            <p style ={styleParagraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>

            <button class="mdc-button">
            <i class="material-icons mdc-button"></i>
            Button
          </button>
          </div>
    );
  }
}

export default PostPage;
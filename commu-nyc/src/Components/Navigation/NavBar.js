import React, { Component } from 'react';
import { Nav,Navbar,NavDropdown,MenuItem} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {NavBarLink,BrandDiv,Logo} from '../../Styles/NavBar.style'
import logo from "../../Assets/Logo-1.png"

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      user : false
    }

  }

  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to = '/'>
              <BrandDiv>
                <Logo src = {logo} />
              </BrandDiv>
            </LinkContainer>
          </Navbar.Brand>
        </Navbar.Header>

        <Nav pullRight>
          <NavDropdown pullRight eventKey="1" title="" id="nav-dropdown">
            <MenuItem eventKey="1.2">
              <NavBarLink to = "/ChooseUser">
                Login
              </NavBarLink>
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="1.3">
              About
            </MenuItem>
            <MenuItem eventKey="1.4">
              <NavBarLink to = "/PostPage">
              Posted Services
              </NavBarLink>
            </MenuItem>
          </NavDropdown>
        </Nav>

      </Navbar>
    );
  }
}

export default NavBar;

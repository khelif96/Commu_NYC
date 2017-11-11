import styled from 'styled-components';
import { NavLink} from 'react-router-dom'


export const NavBarLink = styled(NavLink)`
  color : Black;
  text-decoration: none;
  font-size: 15px;
  display: inline-block;
  padding : 5px;

  &:active{ color : gray;
            text-decoration: none;}
  &:hover{ color : gray;
           color: black;  }
`;

export const BrandDiv = styled.div`
  font-size : 30px;
  color : white;
  &:hover{ cursor : pointer }
  padding : 30px 0px 50px 0px;

`

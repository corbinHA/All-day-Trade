import React from 'react';
import { NavLink } from 'react-router-dom';
import { authenticate } from '../services/auth';
import LogoutButton from './auth/LogoutButton';
import SignupButton from './landing/SignupButton'
import styled from 'styled-components'

const NavBar = ({ setAuthenticated, authenticated }) => {
  if (authenticated) {
    return (
      <NavContainer>
        <ul>
          <li>
            <NavLink to="/home" exact={true} activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" exact={true} activeClassName="active">
              Portfolio
            </NavLink>
          </li>
          <li>
            <LogoutButton setAuthenticated={setAuthenticated} />
          </li>
        </ul>
      </NavContainer>
    );
  }
  else {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/login" exact={true} activeClassName="active">
              Login
            </NavLink>
          </li>
          <li>
            <SignupButton />
          </li>
        </ul>
      </nav>
    );
  }
  // return (
  //   <nav>
  //     <ul>
  //       <li>
  //         <NavLink to="/" exact={true} activeClassName="active">
  //           Home
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to="/login" exact={true} activeClassName="active">
  //           Login
  //         </NavLink>
  //       </li>
  //       <li>
  //         <SignupButton />
  //       </li>
  //       <li>
  //         <NavLink to="/portfolio" exact={true} activeClassName="active">
  //           Portfolio
  //         </NavLink>
  //       </li>
  //       <li>
  //         <LogoutButton setAuthenticated={setAuthenticated} />
  //       </li>
  //     </ul>
  //   </nav>
  // );
}

export default NavBar;

const NavContainer = styled.nav`
  position:sticky;
  top: 0;
`

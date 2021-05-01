import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { authenticate } from '../services/auth';
import LogoutButton from './auth/LogoutButton';
import SignupButton from './landing/SignupButton';
import styled from 'styled-components';
import './NavBar.css';

const NavBar = ({ setAuthenticated, authenticated, currentUser }) => {
  if (authenticated) {

    return (
      <Row className="navbar-wrapper w-100">
        <Col>
          <a href="/">
            <h1 className="logo-text">Duke & Duke</h1>
          </a>
        </Col>
        <Col>
          <ul className="li-wrapper">
            <li>
              <NavLink to="/home" exact={true} activeClassName="active">
                <button className="general-button-green">Home</button>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/portfolio/${currentUser.id}`}
                exact={true}
                activeClassName="active"
              >
                <button className="general-button-green">Portfolio</button>
              </NavLink>
            </li>
            <li>
              <LogoutButton setAuthenticated={setAuthenticated} />
            </li>
            <li className="balance-wrapper">
              <div className="balance-div-title">
                Balance:
              </div>
              <div className="balance-div-amount">
                ${currentUser.balance}
              </div>
            </li>
          </ul>
        </Col>
      </Row>
    );
  } else {
    return (
      <Row className="navbar-wrapper w-100">
        <Col>
          <a href="/">
            <h1 className="logo-text">Duke & Duke</h1>
          </a>
        </Col>
        <Col>
          <ul className="li-wrapper">
            <li>
              <NavLink to="/login" exact={true} activeClassName="active">
                <button className="general-button-white">Login</button>
              </NavLink>
            </li>
            <li>
              <SignupButton />
            </li>
          </ul>
        </Col>
      </Row>
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
};

export default NavBar;

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
`;

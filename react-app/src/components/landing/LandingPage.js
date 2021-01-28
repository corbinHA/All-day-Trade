import React from 'react';
import SignupButton from './SignupButton';
import './Landingpage.css';
import { Container, Row, Col } from 'react-bootstrap';
import LPL from '../../images/LPL.png';

function LandingPage() {
  return (
    <Container className="home-wrapper">
      <Row className="home-content-wrapper">
        <Col className="left-side animate__animated animate__fadeIn">
          <h1 className="heading">Investing for the People, by the People</h1>
          <h2 className="sub-heading">
            This is just a demo for a showing of a commodity trading App
          </h2>
          <div className="margin">
            <SignupButton />
          </div>
        </Col>
        <Col className="right-side">
          <img
            src={LPL}
            className="home-image animate__animated animate__fadeIn"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPage;

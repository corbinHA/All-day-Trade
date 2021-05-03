import React from 'react';
import { NavLink } from 'react-router-dom';

const SignupButton = () => {
  return (
    <NavLink to="/signup" exact={true} activeClassName="active">
      <button className="general-button-green">Sign Up</button>
    </NavLink>
  );
};

export default SignupButton;

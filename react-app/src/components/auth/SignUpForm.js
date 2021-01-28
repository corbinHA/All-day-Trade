import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';
import './Forms.css';
import signup from '../../images/signup.png';

const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(fullname, username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    } else {
      setErrors(['Password: The password did not match']);
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateFullname = (e) => {
    setFullname(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="sign-up-container">
      <div className="sign-up-wrapper animate__animated animate__fadeIn">
        <div className="text-wrapper">
          <span className="form-title">Duke & Duke</span>
          <span className="form-sub-title">Sign Up</span>
        </div>
        <div className="form-div">
          <form onSubmit={onSignUp}>
            <div className="label-wrapper">
              <label className="label">Full Name</label>
              <input
                className="input"
                type="text"
                name="fullname"
                onChange={updateFullname}
                value={fullname}
              ></input>
            </div>
            <div className="label-wrapper">
              <label className="label">User Name</label>
              <input
                className="input"
                type="text"
                name="username"
                onChange={updateUsername}
                value={username}
              ></input>
            </div>
            <div className="label-wrapper">
              <label className="label">Email</label>
              <input
                className="input"
                type="text"
                name="email"
                onChange={updateEmail}
                value={email}
              ></input>
            </div>
            <div className="label-wrapper">
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                name="password"
                onChange={updatePassword}
                value={password}
              ></input>
            </div>
            <div className="label-wrapper">
              <label className="label">Repeat Password</label>
              <input
                className="input"
                type="password"
                name="repeat_password"
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
              ></input>
            </div>
            <button className="general-button-green" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <img
        src={signup}
        className="form-image animate__animated animate__fadeIn"
      />
    </div>
  );
};

export default SignUpForm;

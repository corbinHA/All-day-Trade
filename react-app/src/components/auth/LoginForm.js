import React, { useState } from 'react';
import { Redirect, NavLink, useHistory } from 'react-router-dom';
import { login } from '../../services/auth';
import loginPic from '../../images/loginPic.png';

const LoginForm = ({ authenticated, setAuthenticated, setCurrentUser }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const logInDemo = async (e) => {
    e.preventDefault();
    const emailField = document.querySelector('.input-email');
    const passwordField = document.querySelector('.input-password');
    if (email || password) {
      setEmail('');
      setPassword('');
    }
    emailField.value = 'mortimerduke@aa.io';
    passwordField.value = 'password';

    const user = await login(emailField.value, passwordField.value);
    if (!user.errors) {
      setAuthenticated(true);
      setCurrentUser(user);
      return history.push('/home');
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className="sign-up-container">
        <div className="sign-up-wrapper">
          <div className="text-wrapper">
            <span className="form-title">Duke & Duke</span>
            <span className="form-sub-title">Login</span>
          </div>
          <div className="form-div">
            <form onSubmit={onLogin}>
              <div className="label-wrapper">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input-email"
                  value={email}
                  onChange={updateEmail}
                />
              </div>
              <div className="label-wrapper">
                <label className="label">Password</label>
                <input
                  className="input-password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={updatePassword}
                />
              </div>
              <div className="button-wrapper">
                <button className="general-button-green" type="submit">
                  Log in
                </button>
                <button
                  className="general-button-green"
                  type="submit"
                  onClick={logInDemo}
                >
                  Demo Account
                </button>
              </div>
            </form>
          </div>
          <div className="cta-wrapper">
            <span className="cta-1">New to Duke & Duke? </span>
            <a href="/signup" className="cta">
              Sign Up
            </a>
          </div>
        </div>
        <img
          src={loginPic}
          className="form-image animate__animated animate__fadeIn"
        />
      </div>
    </>
  );
};

export default LoginForm;

import React, { useState } from 'react';
import { Redirect, NavLink, useHistory } from 'react-router-dom';
import { login } from '../../services/auth';

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
    const emailField = document.querySelector('.email');
    const passwordField = document.querySelector('.password');
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
      <div className="login-page__main-container">
        <div className="login-form__main-container">
          <form className="login-form__form-container" onSubmit={onLogin}>
            {errors.length ? (
              <div className="errors__main-container">
                <strong>We encountered the following errors:</strong>
                {errors.map((error, idx) => (
                  <div key={idx} className="error-message">
                    {error}
                  </div>
                ))}
              </div>
            ) : (
              <span></span>
            )}
            <div className="login-form__title">Log In</div>
            <input
              name="email"
              type="email"
              className="login-form__input-field email"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="login-form__input-field password"
              value={password}
              onChange={updatePassword}
            />
            <button className="login-form__submit-button" type="submit">
              Log in
            </button>
            <button
              className="login-form__submit-button demo-button"
              type="submit"
              onClick={logInDemo}
            >
              Log in as Demo User
            </button>
          </form>
          <div className="signup-link__main-container">
            <div className="signup-link__message">New to Duke & Duke?</div>
            <NavLink className="signup-link__link" to="/signup" exact={true}>
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

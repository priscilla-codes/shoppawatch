import MainWrapper from '../components/MainWrapper';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import api from '../api';
import { Link } from 'react-router-dom';

const SignupPage = ({ handleLogin }) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSuccessfulAuth = data => {
    handleLogin(data);
    history.goBack();
  };

  const handleSubmit = e => {
    axios
      .post(
        `${api.sessions}`,
        {
          user: {
            email: email,
            password: password
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.logged_in) {
          handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log('login error', error);
      });
    e.preventDefault();
  };

  return (
    <div>
      <MainWrapper page="sign-in-page">
        <div className="sign-in-page-content">
          <Link to="/" className="brand">
            <span className="brand-name">ShoppAWatch</span>
            <span className="brand-end-period"></span>
          </Link>
          <h2>Sign in to your account</h2>
          <form onSubmit={e => handleSubmit(e)}>
            <div className="input-container">
              <i className="fal fa-envelope"></i>
              <input
                type="email"
                name="email"
                className="email-input"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <i className="fal fa-lock-alt"></i>
              <input
                type="password"
                name="password"
                className="password-input"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            <input type="submit" value="Sign in" className="sign-in-button" />
          </form>
          <div class="auth-link">
            <p>
              New to ShoppAWatch? <Link to={'/signup'}>Sign up</Link>
            </p>
          </div>
        </div>
      </MainWrapper>
    </div>
  );
};

export default SignupPage;

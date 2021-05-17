import MainWrapper from '../components/MainWrapper';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import api from '../api';
import { Link } from 'react-router-dom';

const SignupPage = ({ handleLogin }) => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSuccessfulAuth = data => {
    handleLogin(data);
    history.push('/');
  };

  const handleSubmit = e => {
    axios
      .post(
        `${api.sessions}`,
        {
          user: {
            name: name,
            email: email,
            password: password
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        console.log('registration res', response);
        if (response.data.status === 'created') {
          handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log('registration error', error);
      });
    e.prevent0Default();
  };

  return (
    <div>
      <MainWrapper page="sign-up-page">
        <div className="sign-up-page-content">
          <Link to="/" className="brand">
            <span className="brand-name">ShoppAWatch</span>
            <span className="brand-end-period"></span>
          </Link>
          <h2>Sign up for an account</h2>
          <form onSubmit={e => handleSubmit(e)}>
            <div className="input-container">
              <i className="fal fa-user"></i>
              <input
                type="text"
                name="name"
                className="text-input"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
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
            <input type="submit" value="Sign up" className="sign-up-button" />
          </form>
        </div>
      </MainWrapper>
    </div>
  );
};

export default SignupPage;

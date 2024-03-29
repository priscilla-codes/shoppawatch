import MainWrapper from '../components/MainWrapper';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  selectErrorMessage,
  setErrorMessage,
  signupAsync,
  selectLoggedInStatus,
  LOGGED_IN
} from '../authSlice';

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loggedInStatus = useSelector(selectLoggedInStatus);
  const errorMessage = useSelector(selectErrorMessage);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signupAsync({ name, email, password }));
    dispatch(setErrorMessage(''));
  };

  useEffect(() => {
    if (loggedInStatus === LOGGED_IN) {
      navigate('/');
    }
  }, [loggedInStatus]);

  useEffect(() => {
    dispatch(setErrorMessage(''));
  }, []);

  return (
    <MainWrapper page="sign-up-page">
      <div className="sign-up-page-content">
        <Link to="/" className="brand">
          <span className="brand-name">ShoppAWatch</span>
          <span className="brand-end-period"></span>
        </Link>
        <h2>Sign up for an account</h2>
        {errorMessage !== '' && <p class="error">{errorMessage}</p>}
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
        <div className="auth-link">
          <p>
            Already have an account? <Link to={'/signin'}>Sign in</Link>
          </p>
        </div>
      </div>
    </MainWrapper>
  );
};

export default SignupPage;

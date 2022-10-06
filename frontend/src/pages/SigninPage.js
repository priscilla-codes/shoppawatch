import MainWrapper from '../components/MainWrapper';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { signinAsync, selectLoggedInStatus, LOGGED_IN } from '../authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const SigninPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const loggedInStatus = useSelector(selectLoggedInStatus);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signinAsync({ email, password }));
  };

  useEffect(() => {
    if (loggedInStatus === LOGGED_IN) {
      history.goBack();
    }
  }, [loggedInStatus]);

  return (
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
        <div className="auth-link">
          <p>
            New to ShoppAWatch? <Link to={'/signup'}>Sign up</Link>
          </p>
        </div>
      </div>
    </MainWrapper>
  );
};

export default SigninPage;

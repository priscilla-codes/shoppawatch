import MainWrapper from '../components/MainWrapper';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signupAsync, selectLoggedInStatus, LOGGED_IN } from '../authSlice';
import { useHistory } from 'react-router-dom';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loggedInStatus = useSelector(selectLoggedInStatus);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signupAsync({ name, email, password }));
  };

  useEffect(() => {
    if (loggedInStatus === LOGGED_IN) {
      history.push('/');
    }
  }, [loggedInStatus]);

  return (
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

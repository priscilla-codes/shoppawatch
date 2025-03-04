import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCart, selectCart } from '../cartSlice';
import { handleLogout, selectLoggedInStatus } from '../authSlice';
import { useNavigate } from 'react-router';
import axios from 'axios';
import api from '../api';
import SearchBox from './SearchBox';

const Navbar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const node = useRef();
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const loggedInStatus = useSelector(selectLoggedInStatus);

  const totalQuantity = cart && cart.cart_items 
    ? cart.cart_items.reduce((total, item) => total + (item.quantity || 1), 0)
    : 0;

  const handleShowDropdown = e => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = e => {
    if (node.current && !node.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  const handleLogoutClick = () => {
    axios
      .delete(`${api.logOut}`, { withCredentials: true })
      .then(response => {
        dispatch(handleLogout());
        dispatch(setCart(response.data.cart));
        navigate('/signin');
      })
      .catch(error => {
        console.log('logout error', error);
      });
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="nav">
      <div className="centered-nav">
        <div className="left-nav">
          <Link to="/">
            <div className="brand">
              <span className="brand-name">ShoppAWatch</span>
              <span className="brand-end-period"></span>
            </div>
          </Link>
        </div>
        <SearchBox />
        <div className="right-nav">
          <div className="cart-icon">
            <Link to={'/cart'}>
              <span className="cart-icon-badge">{totalQuantity}</span>
              <i className="fal fa-shopping-cart"></i>
            </Link>
          </div>
          {loggedInStatus === 'NOT_LOGGED_IN' ? (
            <div className="signin-text">
              <Link to={'/signin'}>Sign in</Link>
            </div>
          ) : (
            <div className="dropdown" ref={node}>
              <div
                className="username-icon"
                onClick={e => handleShowDropdown(e)}
              >
                <i className="fal fa-user-circle"></i>
              </div>
              {showDropdown && (
                <div className="dropdown-content">
                  <div
                    onClick={() => handleLogoutClick()}
                    className="dropdown-link"
                  >
                    <i className="fal fa-sign-out"></i>
                    <span>Signout</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

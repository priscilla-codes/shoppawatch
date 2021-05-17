import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';

const Navbar = ({ cart }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const node = useRef();

  const handleShowDropdown = e => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = e => {
    if (node.current && !node.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
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
          <div className="search">
            <input type="text" placeholder="Search" />
            <span>
              <i className="fal fa-search"></i>
            </span>
          </div>
          <div className="right-nav">
            <Link to={'/cart'}>
              <div className="cart-icon">
                <span className="cart-icon-badge">{cart.total_items}</span>
                <i className="fal fa-shopping-cart"></i>
              </div>
            </Link>
            <div className="dropdown" ref={node}>
              <div
                className="username-icon"
                onClick={e => handleShowDropdown(e)}
              >
                <i className="fal fa-user-circle"></i>
              </div>
              {showDropdown && (
                <div className="dropdown-content">
                  <Link to={'/signout'} className="dropdown-link">
                    <i class="fal fa-sign-out"></i>
                    <span>Signout</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

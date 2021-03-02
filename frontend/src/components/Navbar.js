const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <div className="centered-nav">
          <div className="left-nav">
            <div className="brand">
              <span className="brand-name">ShoppAWatch</span>
              <span className="brand-end-period"></span>
            </div>
          </div>
          <div className="search">
            <input type="text" placeholder="Search" />
            <span>
              <i className="fal fa-search"></i>
            </span>
          </div>
          <div className="right-nav">
            <div className="cart-icon">
              <span className="cart-icon-badge">3</span>
              <i className="fal fa-shopping-cart"></i>
            </div>
            <div className="username-icon">
              <i className="fal fa-user-circle"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

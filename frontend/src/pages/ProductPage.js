const ProductPage = () => {
  return (
    <div>
      <div className="main-content product-page">
        <div className="single-product-layout">
          <div className="top-watch-block__single">
            <div className="leftside-single-block">
              <img src="./images/watch1.jpg" alt="" />
            </div>
            <div className="rightside-single-block">
              <div className="top-rightside-single-block">
                <div className="name">
                  <span className="watch-name">Fossil</span>
                </div>
                <div className="price">
                  <span className="watch-price">
                    <span className="full-price">$425.00</span>
                  </span>
                </div>
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur scelerisque commodo erat id hendrerit. Suspendisse
                    ac consequat elit, ac ultrices ipsum.
                  </p>
                </div>
              </div>
              <hr />
              <div className="bottom-rightside-single-block">
                <div className="quantity__cart">
                  <span className="increment">
                    <i className="far fa-minus"></i>
                  </span>
                  <input className="quantity-count-input" value="1" size="4" />
                  <span className="decrement">
                    <i className="far fa-plus"></i>
                  </span>
                </div>
                <div className="add-to-cart-button">
                  <span>Add To Cart</span>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="bottom-watch-block__single">
            <div className="tabs">
              <div className="tabs-list">
                <span className="tabs-list-item selected">Description</span>
                <span className="tabs-list-item">Reviews(0)</span>
              </div>
              <div className="tab-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur scelerisque commodo erat id hendrerit. Suspendisse
                  ac consequat elit, ac ultrices ipsum. Sed non justo id odio
                  commodo fringilla eu sed risus.
                </p>
                <p>- Phasellus a sollicitudin eros</p>
                <p>- 50% consectetur nisl justo</p>
                <p>- Aenean ornare</p>
                <p>- Morbi pharetra vitae tellus ac sollicitudin</p>
                <p>- Praesent non semper ante</p>
                <p>
                  Nulla varius maximus felis eu lacinia. Sed quis erat quis
                  tellus vehicula consequat id non ex. Quisque facilisis
                  dignissim est vitae porttitor. Suspendisse orci leo, consequat
                  ac elit eu, vestibulum congue dui. Suspendisse vestibulum odio
                  sit amet pulvinar eleifend. Morbi pulvinar sapien eu quam
                  tempor tincidunt. Cras fermentum nibh quis sodales tincidunt.
                  Nulla facilisi. Sed vitae magna ut libero posuere imperdiet.
                  Pellentesque a fermentum enim. Nullam vel enim nibh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

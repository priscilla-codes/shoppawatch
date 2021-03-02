const Product = ({ product }) => {
  return (
    <div className="watch-block">
      <img src={product.image} alt="" />
      <div className="watch-details">
        <div className="name">
          <span className="watch-name">{product.name}</span>
        </div>
        <div className="price">
          <span className="watch-price">
            <span className="full-price">${product.price}</span>
          </span>
        </div>
      </div>
      <div className="add-to-cart">Add to cart</div>
    </div>
  );
};

export default Product;

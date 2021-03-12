import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div className="watch-block">
      <Link to={`/products/${product._id}`} className="watch-image-link">
        <img src={product.image} alt="" />
      </Link>
      <div className="watch-details">
        <div className="brand__watch">
          <span className="brand-name__watch">{product.brand}</span>
        </div>
        <Link to={`/products/${product._id}`}>
          <div className="name">
            <span className="watch-name">{product.name}</span>
          </div>
        </Link>
        <Link to={`/products/${product._id}`}>
          <div className="price">
            <span className="watch-price">
              <span className="full-price">${product.price}</span>
            </span>
          </div>
        </Link>
      </div>
      <div className="add-to-cart">Add to cart</div>
    </div>
  );
};

export default Product;

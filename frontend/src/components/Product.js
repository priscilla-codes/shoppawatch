import { Link } from 'react-router-dom';
import { addToCartHandlerAsync, fetchCartAsync } from '../cartSlice';
import { useDispatch } from 'react-redux';

const Product = ({ product, usCurrency }) => {
  const truncateText = text =>
    text.length > 29 ? `${text.substring(0, 29)}...` : text;
  const dispatch = useDispatch();
  
  const handleAddToCart = async (product) => {
    try {
      await dispatch(addToCartHandlerAsync(product)).unwrap();
      await dispatch(fetchCartAsync()).unwrap();
    } catch (error) {
      console.error('Failed to add to cart:', error);
    }
  };

  return (
    <div className="watch-block">
      <Link to={`/products/${product.id}`} className="watch-image-link">
        <img src={product.main_image} alt="" />
      </Link>
      <div className="watch-details">
        <div className="brand__watch">
          <span className="brand-name__watch">{product.brand}</span>
        </div>
        <Link to={`/products/${product.id}`}>
          <div className="name">
            <span className="watch-name">{truncateText(product.name)}</span>
          </div>
        </Link>
        <Link to={`/products/${product.id}`}>
          <div className="price">
            <span className="watch-price">
              <span className="full-price">
                {usCurrency.format(product.price)}
              </span>
            </span>
          </div>
        </Link>
      </div>
      <div
        className="add-to-cart"
        onClick={() => handleAddToCart(product)}
      >
        Add to cart
      </div>
    </div>
  );
};

export default Product;

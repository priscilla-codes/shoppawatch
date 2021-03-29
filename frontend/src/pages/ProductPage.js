import { useParams } from 'react-router-dom';
import products from '../products';
import MainContent from '../components/MainContent';
import ProductDescription from '../components/ProductDescription';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p._id === id);

  return (
    <>
      <MainContent page="product-page">
        <div className="single-product-layout">
          <div className="top-watch-block__single">
            <div className="leftside-single-block">
              {<img src={product.image} alt="" />}
            </div>
            <div className="rightside-single-block">
              <div className="top-rightside-single-block">
                <div className="name">
                  <span className="watch-name">{product.name}</span>
                </div>
                <div className="price">
                  <span className="watch-price">
                    <span className="full-price">${product.price}</span>
                  </span>
                </div>
                <div className="description">
                  <p>{product.description.summary}</p>
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
                <ProductDescription key={product._id} product={product} />
              </div>
            </div>
          </div>
        </div>
      </MainContent>
    </>
  );
};

export default ProductPage;

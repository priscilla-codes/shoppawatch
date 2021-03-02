import Product from '../components/Product';
import products from '../products';

const HomePage = () => {
  return (
    <div>
      <div className="main-content">
        <div className="page-heading">
          <h2>Shop</h2>
        </div>
        <div className="watches-container">
          {products.map(product => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

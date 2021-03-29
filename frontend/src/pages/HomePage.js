import Product from '../components/Product';
import products from '../products';
import MainContent from '../components/MainContent';

const HomePage = () => {
  return (
    <>
      <MainContent>
        <div className="page-heading">
          <h2>Shop</h2>
        </div>
        <div className="watches-container">
          {products.map(product => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </MainContent>
    </>
  );
};

export default HomePage;

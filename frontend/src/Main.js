import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Footer from './components/Footer';
import MainWrapper from './components/MainWrapper';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function Main() {
  return (
    <BrowserRouter>
      <MainWrapper>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/products/:id">
            <ProductPage />
          </Route>
        </Switch>
        <Footer />
      </MainWrapper>
    </BrowserRouter>
  );
}

export default Main;

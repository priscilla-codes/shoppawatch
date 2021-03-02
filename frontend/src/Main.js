import Footer from './components/Footer';
import MainWrapper from './components/MainWrapper';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function Main() {
  return (
    <MainWrapper>
      <Navbar />
      <HomePage />
      <Footer />
    </MainWrapper>
  );
}

export default Main;

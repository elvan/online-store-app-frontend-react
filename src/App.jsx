import { Container } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './features/account/LoginPage';
import CartPage from './features/cart/CartPage';
import HomePage from './features/home/HomePage';
import ProductPage from './features/products/ProductPage';
import Footer from './layout/Footer';
import Header from './layout/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomePage} exact />
          <Route path='/products/:id' component={ProductPage} exact />
          <Route path='/cart' component={CartPage} exact />
          <Route path='/login' component={LoginPage} exact />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

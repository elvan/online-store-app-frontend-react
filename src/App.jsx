import { Container } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './features/account/LoginPage';
import RegisterPage from './features/account/RegisterPage';
import CartPage from './features/cart/CartPage';
import HomePage from './features/home/HomePage';
import ProductPage from './features/products/ProductPage';
import Footer from './layout/Footer';
import Header from './layout/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container as='main' className='py-3' fluid='lg'>
        <Route path='/' component={HomePage} exact />
        <Route path='/products/:id' component={ProductPage} exact />
        <Route path='/cart' component={CartPage} exact />
        <Route path='/login' component={LoginPage} exact />
        <Route path='/register' component={RegisterPage} exact />
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

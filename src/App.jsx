import { Container } from 'react-bootstrap';
import Footer from './app/layout/Footer';
import Header from './app/layout/Header';
import HomePage from './features/home/HomePage';

export default function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <HomePage />
        </Container>
      </main>
      <Footer />
    </>
  );
}

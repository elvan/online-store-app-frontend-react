import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './app/components/Footer';
import Header from './app/components/Header';

export default function App() {
  return (
    <>
      <Header />
      <Container>
        <main className='py-3'>
          <h1>Online Store</h1>
        </main>
      </Container>
      <Footer />
    </>
  );
}

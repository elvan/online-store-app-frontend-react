import { Container } from 'react-bootstrap';
import Footer from './app/components/Footer';
import Header from './app/components/Header';

export default function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Welcome to OnlineStore</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

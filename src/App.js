import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import Landing from './layout/Landing';
import Register from './auth/Register';
import { Container } from 'react-bootstrap';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';


function App() {


  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route path='/login' element={
            <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
              <div className='w-100' style={{ maxwidth: '400px' }}>
                <Login />
              </div>
            </Container>} />
          <Route path='/register' element={
            <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
              <div className='w-100' style={{ maxwidth: '400px' }}>
                <Register />
              </div>
            </Container>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import Landing from './Landing';
import Register from './auth/Register';
import { Container } from 'react-bootstrap';


function App() {


  return (
    <div>
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
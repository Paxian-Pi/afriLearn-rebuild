import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import Landing from './Landing';
import Register from './auth/Register';


function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
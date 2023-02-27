//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Announce from './components/Announce';
//import { Container } from "reactstrap";
import Home from './components/Home';
import Login from './components/login';
import Logout from './components/logout';
import Main from './components/Main';
import Registration from './components/regis';

function App() {
  return (
  //<Container>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/announce' element={<Announce />} />
      <Route path='/regis' element={<Registration />} />
      <Route path='/main' element={<Main />} />
    </Routes>
  </BrowserRouter>
  //</Container>
  );
};

export default App;

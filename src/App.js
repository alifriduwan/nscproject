//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Main from './pages/Main/Main';
/*import Announce from './components/Announce';
//import { Container } from "reactstrap";
import Home from './components/Home';
import Login from './components/login';
import Logout from './components/logout';
import Main from './pages/Main/Main';
import Registration from './components/regis';*/

function App() {
  return (
  //<Container>
  <BrowserRouter>
    <Routes>
      <Route path='/main' element={<Main />} />
    </Routes>
  </BrowserRouter>
  //</Container>
  );
};

export default App;

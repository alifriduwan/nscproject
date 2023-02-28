//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Activity from './pages/Activity/Activity';
import Login from './pages/Login/Login';
import Logout from './pages/Logout/Logout';
import Main from './pages/Main/Main';
import MainLog from './pages/Main/MainLogin';

function App() {
  return (
  //<Container>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<Login />} />
      <Route path='/mainlog' element={<MainLog />} />
      <Route path='/activity' element={<Activity />} />
    </Routes>
  </BrowserRouter>
  //</Container>
  );
};

export default App;

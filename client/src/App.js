//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Activity from './pages/Activity/Activity';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

function App() {
  return (
  //<Container>
  <BrowserRouter>
    <Routes>
      <Route path='/main' element={<Main />} />
      <Route path='/login' element={<Login />} />
      <Route path='/activity' element={<Activity />} />
    </Routes>
  </BrowserRouter>
  //</Container>
  );
};

export default App;

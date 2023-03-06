import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Activity from './pages/Activity/Activity';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import MainLog from './pages/Main/MainLogin';
import AnnounceR1 from './pages/AnnounceTable/AnnounceR1';
import AnnounceR2 from './pages/AnnounceTable/AnnounceR2';
import PlaceContact from './pages/PlaceContact/PlaceContact';
import Profile from './pages/Profiles/Profile';
import CompetitionTopics from './pages/CompetitionTopics/CompetitionTopics';

function App() {
  return (
  //<Container>
  <BrowserRouter>
    <Routes>
      <Route path='/main' element={<Main />} />
      <Route path='/login' element={<Login />} />
      <Route path='/mainlog' element={<MainLog />} />
      <Route path='/activity' element={<Activity />} />
      <Route path='/announceR1' element={<AnnounceR1 />} />
      <Route path='/announceR2' element={<AnnounceR2 />} />
      <Route path='/PlaceContact' element={<PlaceContact />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/competitiontopics' element={<CompetitionTopics />} />
    </Routes>
  </BrowserRouter>
  //</Container>
  );
};

export default App;

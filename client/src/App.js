import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Activity from './pages/Activity/Activity';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import AnnounceR1 from './pages/AnnounceTable/AnnounceR1';
import AnnounceR2 from './pages/AnnounceTable/AnnounceR2';
import PlaceContact from './pages/PlaceContact/PlaceContact';
import Profile from './pages/Profiles/Profile';
import CompetitionTopics from './pages/CompetitionTopics/CompetitionTopics';
import Qualifications from './pages/Qualifications/Qualifications';
import Announcepage from './pages/AnnouncePage/Announcepage';
import AdminAnnounce from './pages/Admin/AdminAnnounce';
import ScheduleG1 from './pages/ScheduleGroup/ScheduleG1';
import ScheduleG2 from './pages/ScheduleGroup/ScheduleG2';
import ScheduleG3 from './pages/ScheduleGroup/ScheduleG3';
import ScheduleG4 from './pages/ScheduleGroup/ScheduleG4';
import ScheduleG5 from './pages/ScheduleGroup/ScheduleG5';
import ScheduleG6 from './pages/ScheduleGroup/ScheduleG6';
import Scheddule_MTG1 from './pages/Schedule_MTG/Schedule_MTG1';
import Scheddule_MTG2 from './pages/Schedule_MTG/Schedule_MTG2';
import Scheddule_MTG3 from './pages/Schedule_MTG/Schedule_MTG3';
import Scheddule_MTG4 from './pages/Schedule_MTG/Schedule_MTG4';
import Scheddule_MTG5 from './pages/Schedule_MTG/Schedule_MTG5';
import Scheddule_MTG6 from './pages/Schedule_MTG/Schedule_MTG6';
import AnnCreate from './pages/Admin/AnnCreate';
import AnnUpdate from './pages/Admin/AnnUpdate';
import Admincreate from './pages/Admin/Admincreate';
import Users from './pages/Admin/Users';

function App() {
  return (
  //<Container>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/main' element={<Main />} />
      <Route path='/login' element={<Login />} />
      <Route path='/activity' element={<Activity />} />
      <Route path='/announceR1' element={<AnnounceR1 />} />
      <Route path='/announceR2' element={<AnnounceR2 />} />
      <Route path='/PlaceContact' element={<PlaceContact />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/competitiontopics' element={<CompetitionTopics />} />
      <Route path='/qualification' element={<Qualifications />} />
      <Route path='/scheduleG1' element={<ScheduleG1 />} />
      <Route path='/scheduleG2' element={<ScheduleG2 />} />
      <Route path='/scheduleG3' element={<ScheduleG3 />} />
      <Route path='/scheduleG4' element={<ScheduleG4 />} />
      <Route path='/scheduleG5' element={<ScheduleG5 />} />
      <Route path='/scheduleG6' element={<ScheduleG6 />} />
      <Route path='/meeting1' element={<Scheddule_MTG1 />} />
      <Route path='/meeting2' element={<Scheddule_MTG2 />} />
      <Route path='/meeting3' element={<Scheddule_MTG3 />} />
      <Route path='/meeting4' element={<Scheddule_MTG4 />} />
      <Route path='/meeting5' element={<Scheddule_MTG5 />} />
      <Route path='/meeting6' element={<Scheddule_MTG6 />} />
      <Route path='/announcement' element={<Announcepage />} />
      <Route path='/adminann' element={<AdminAnnounce />} />
      <Route path='/annupdate/adminann' element={<AdminAnnounce/>} />
      <Route path='/anncreate' element={<AnnCreate />} />
      <Route path='/annupdate/:id' element={<AnnUpdate/>} />
      <Route path='/Admin' element={<Users />} />
      <Route path='/Admincreate' element={<Admincreate />} />
      
    </Routes>
  </BrowserRouter>
  //</Container>
  );
};

export default App;

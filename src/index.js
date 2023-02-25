import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnnouncementR1 from './pages/AnnouncementR1';
import AnnouncementR2 from './pages/AnnouncementR2';
import Topic from './pages/Topic';
import PlaceContac from './pages/PlaceContac';
import ScheduleG1 from './pages/ScheduleG1';
import ScheduleG2 from './pages/ScheduleG2';
import ScheduleG3 from './pages/ScheduleG3';
import ScheduleG4 from './pages/ScheduleG4';
import ScheduleG5 from './pages/ScheduleG5';
import ScheduleG6 from './pages/ScheduleG6';
import ButtonForSchedule from './components/ButtonForSchedule';
import HeaderWLogin from './components/HeaderWLogin';
import Scheddule_MTG1 from './pages/Schedule_MTG1';
import Status_project from './pages/Status_project';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "announceR1",
    element: <AnnouncementR1 />,
  },
  {
    path: "announceR2",
    element: <AnnouncementR2 />,
  },
  {
    path: "topic",
    element: <Topic />,
  },
  {
    path: "placecontac",
    element: <PlaceContac />,
  },
  {
    path: "scheduleG1",
    element: <ScheduleG1 />,
  },
  {
    path: "scheduleG2",
    element: <ScheduleG2 />,
  },
  {
    path: "scheduleG3",
    element: <ScheduleG3 />,
  },
  {
    path: "scheduleG4",
    element: <ScheduleG4 />,
  },
  {
    path: "scheduleG5",
    element: <ScheduleG5 />,
  },
  {
    path: "scheduleG6",
    element: <ScheduleG6 />,
  },
  {
    path: "buttonSchedule",
    element: <ButtonForSchedule />,
  },
  {
    path: "headerWlogin",
    element: <HeaderWLogin />,
  },
  {
    path: "schedule_mt",
    element: <Scheddule_MTG1 />,
  }
  ,
  {
    path: "statusProject",
    element: <Status_project />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

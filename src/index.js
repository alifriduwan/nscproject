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

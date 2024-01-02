import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Institutions from './components/Institutions.jsx';
import Careers from './components/Careers.jsx';
import Footer from "./components/Footer"
import Contact from './components/Contact2.jsx';
import Home2 from './components/Home2.jsx';
const router = createBrowserRouter([
  {
    path: "/paths/",
    element: <App />,
    children: [
      {
        path: "/paths/",
        element: <Home2 />,
      },
      {
        path: "/paths/contact",
        element: <Contact />,
      },
      {
        path: "/paths/institutions",
        element: <Institutions />,
      },
      {
        path: "/paths/careers",
        element: <Careers />,
      },
  
      {
        path: "/paths/footer",
        element: <Footer />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

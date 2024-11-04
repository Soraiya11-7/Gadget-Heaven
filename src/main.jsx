import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx';



import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import About from './components/About.jsx';
import MianLayout from './layouts/MianLayout.jsx';
import Home from './pages/Home.jsx';
import Statistics from './pages/Statistics.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Extra from './pages/Extra.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement:<ErrorPage></ErrorPage>,
    element:<MianLayout></MianLayout> ,
    
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/statistics",
        element:<Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element:<Dashboard></Dashboard>,
      },
      {
        path: "/extra",
        element:<Extra></Extra>,
      },
    ]
  },
 
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <h1>Hello world</h1> */}
  </StrictMode>,
)

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

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    element:<MianLayout></MianLayout> ,
  },
 
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

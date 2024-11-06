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
import MianLayout from './layouts/MianLayout.jsx';
import Home from './pages/Home.jsx';
import Statistics from './pages/Statistics.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Extra from './pages/Extra.jsx';
import AllGadgets from './components/AllGadgets.jsx';
import ShowCategories from './components/ShowCategories.jsx';
import Details from './components/Details.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MianLayout></MianLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: "/",
            element: <ShowCategories></ShowCategories>,
            loader: () => fetch('../gadgets.json'),
          },
          {
            path: "/category/:category",
            element: <ShowCategories></ShowCategories>,
            loader: () => fetch('../gadgets.json'),
          },
          {
            path: "/category/all",
            element: <ShowCategories></ShowCategories>,
            loader: () => fetch('../gadgets.json'),
          },
        ],
      },
      {
        path: "/card/:id",
        element: <Details></Details>,
        loader: () => fetch('../gadgets.json'),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/extra",
        element: <Extra></Extra>,
        loader: () => fetch('../gadgets.json'),
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

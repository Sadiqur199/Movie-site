import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar.jsx';
import Main from './Layout/Main.jsx';
import MovieDetails from './Components/MovieDetails/MovieDetails.jsx';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
   path:'details/:detailsId',
   element:<MovieDetails></MovieDetails>,
   loader:()=> fetch('movie.json')
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routers from './main/routes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { IconContext } from "react-icons";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ToastContainer />
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </IconContext.Provider>
  </React.StrictMode>
);

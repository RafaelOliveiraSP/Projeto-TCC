import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotas from './Rotas.js';

import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <Rotas />
  </React.StrictMode>
);


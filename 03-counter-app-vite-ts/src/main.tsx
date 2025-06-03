import React from 'react';
import ReactDom from 'react-dom/client';
// import { HelloWorldApp } from './HelloWorldApp.jsx';
// import { FirstApp } from './FirstApp.js';
import {CounterApp} from './CounterApp.tsx';
import './styles.css';


ReactDom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <FirstApp subtittle="soy un subtitulo"/> */}
    <CounterApp/>
  </React.StrictMode>
);
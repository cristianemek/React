import React from 'react';
import ReactDom from 'react-dom/client';
// import { HelloWorldApp } from './HelloWorldApp.jsx';
import { FirstApp } from './FirstApp.jsx';
import './styles.css';


ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp subtittle="soy un subtitulo"/>
  </React.StrictMode>
);
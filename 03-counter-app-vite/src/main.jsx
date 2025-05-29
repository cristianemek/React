import React from 'react';
import ReactDom from 'react-dom/client';


function App() {
  return (
    <div>
      <h1>Hola mundo!!!</h1>
      <p>This is a simple React application.</p>
    </div>
  );
}

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
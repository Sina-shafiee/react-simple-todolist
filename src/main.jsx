import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppState from './context/AppState';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppState>
      <App />
    </AppState>
  </React.StrictMode>
);

// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css'; // Add this at the top of your App.jsx or main.jsx

import App from './App';
import { BrowserRouter } from 'react-router-dom'; // <-- Ensure this is here
import { AuthProvider } from './context/AuthContext'; // <-- Ensure the provider is inside BrowserRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* <-- Ensure BrowserRouter wraps everything */}
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

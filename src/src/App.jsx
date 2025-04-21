import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/shop" element={
        <PrivateRoute>
          <Shop />
        </PrivateRoute>
      } />
      <Route path="/shop/:category" element={
        <PrivateRoute>
          <Shop />
        </PrivateRoute>
      } />
      <Route path="/cart" element={
        <PrivateRoute>
          <Cart />
        </PrivateRoute>
      } />
      <Route path="/" element={<Navigate to="/shop" replace />} />
    </Routes>
  );
}

export default App;

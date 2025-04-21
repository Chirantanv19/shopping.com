// src/contexts/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const user = localStorage.getItem('shopUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Simple mock authentication
    // In a real app, you would validate credentials against a backend
    const mockUsers = [
      { id: 1, name: 'Test User', email: 'user@example.com', password: 'password123' },
      { id: 2, name: 'Admin User', email: 'admin@example.com', password: 'admin123' }
    ];

    const user = mockUsers.find(u => u.email === email && u.password === password);
    
    if (user) {
      const userData = { id: user.id, name: user.name, email: user.email };
      localStorage.setItem('shopUser', JSON.stringify(userData));
      setCurrentUser(userData);
      return true;
    }
    
    return false;
  };

  const logout = () => {
    localStorage.removeItem('shopUser');
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
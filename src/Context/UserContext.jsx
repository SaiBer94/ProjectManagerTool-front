import React, { createContext, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const register = async (userData) => {
    try {
      const response = await axios.post('http://localhost:4500/api/user/register',userData);
      setUser(response.data);
      setIsLoggedIn(true);
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const login = async (userData) => {
    try {
      const response = await axios.post('http://localhost:4500/api/user/login', userData);
      setUser(response.data);
      setIsLoggedIn(true);
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, register, login }}>
      {children}
    </UserContext.Provider>
  );
};

import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const checkTokenExpiration = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const tokenData = JSON.parse(atob(token.split('.')[1]));
      const expirationTime = tokenData.exp * 1000;
      const currentTime = Date.now();
      if (currentTime > expirationTime) {
            setUser(null);
            setIsLoggedIn(false);
            localStorage.removeItem('user');
            localStorage.removeItem('token');
      }
    }
  };

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
      setIsLoggedIn(true);
    }

    // Check token expiration every minute
    const interval = setInterval(checkTokenExpiration, 60000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const register = async (userData) => {
    try {
      const response = await axios.post('http://localhost:4500/api/user/register',userData);
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const login = async (userData) => {
    try {
      const response = await axios.post('http://localhost:4500/api/user/login', userData);
      if(response.status === 200){
        const {name,email,phone,role,token} = response.data
        setUser({name,email,phone,role});
        setIsLoggedIn(true);
        localStorage.setItem("user", JSON.stringify({name,email,phone,role}))
        localStorage.setItem("token", JSON.stringify({token}))
        return response
      }
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

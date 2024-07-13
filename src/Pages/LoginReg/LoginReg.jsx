import React, { useContext, useState } from 'react';
import axios from 'axios';
import './LoginReg.css';
import { UserContext } from '../../Context/UserContext';

export const Home = () => {
  const [mode, setMode] = useState('login'); // 'login' or 'register'
  const { register } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  const toggleMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = mode === 'register' ? { name, email, phone, password } : { email, password };
    try {
      if (mode === 'register') {
        const response = await register(user);
      } else {
        // const response = await axios.post('http://localhost:5000/users/login', user);
        // console.log('Login successful:', response.data);
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="home-container">
      <div className="main-title">
        <h1>Welcome to ProjectManagement!</h1>
      </div>
      <div className="form-container">
        <div className="title-container">
          {mode === 'login' ? (
            <h2 className="subtitle">Welcome back</h2>
          ) : (
            <h2 className="subtitle">Join us today!</h2>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          {mode === 'register' && (
            <>
              <div className="form-group">
                <label htmlFor="name">Username</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  required
                />
              </div>
            </>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <button type="submit">{mode === 'login' ? 'Login' : 'Register'}</button>
        </form>
        <p>
          {mode === 'login' ? (
            <>
              Don't have an account?{' '}
              <span className="clickable" onClick={toggleMode}>
                click here
              </span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span className="clickable" onClick={toggleMode}>
                click here
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

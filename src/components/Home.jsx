// src/components/Home.js
import React from 'react';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
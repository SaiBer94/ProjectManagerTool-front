import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';

export const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? <h1>Hello, {user.name}!</h1> : <h1>Hello!</h1>}
    </div>
  );
};

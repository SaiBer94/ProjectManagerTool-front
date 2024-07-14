import React, { useContext, useState } from 'react';
import './Dashboard.css'; // Adjust the path as necessary
import { UserContext } from '../../Context/UserContext';
import useAuth from '../../Hooks/UseAuth'; // Import the custom hook
import { Sidebar } from '../../Components/Sidebar';

export const Dashboard = () => {
  const { user: contextUser } = useContext(UserContext);
  const { user, isLoading } = useAuth();
  const [isPopUpProjects, setIsPopUpProjects] = useState(false);

  const handleMenuClick = (menuName) => {
    console.log(`Clicked on ${menuName}`);
    // Add logic to handle menu item clicks, such as changing active state or navigating
  };

  const openProjectPopUp = () => {
    setIsPopUpProjects(!isPopUpProjects);
    console.log(isPopUpProjects);
  };

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading state while user data is being retrieved
  }

  return (
    <div className="app-container">
      <Sidebar/>
      <div className="dashboard-container">
        <div className="greeting">
          <h1>Welcome Back, {user?.name.charAt(0).toUpperCase() + user?.name.slice(1)}!</h1>
        </div>
        <div className="main-buttons">
          <button onClick={openProjectPopUp}>Projects</button>
          <button>Stuff</button>
          {/* Add more buttons as needed */}
        </div>
        <div className="inbox-area">
          <h2>Inbox</h2>
          {/* Add inbox content */}
        </div>
        <div className="widgets-area">
          <h2>Widgets</h2>
          {/* Add widgets content */}
        </div>
      </div>
    </div>
  );
};

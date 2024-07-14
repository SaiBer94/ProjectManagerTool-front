import React, { useContext, useState } from 'react';
import './Dashboard.css'; // Adjust the path as necessary
import { UserContext } from '../../Context/UserContext';
import useAuth from '../../Hooks/UseAuth'; // Import the custom hook

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
      <div className="sidebar">
        <div className="sidebar-profile">
          <img src="profile.png" alt="Profile" />
        </div>
        <div className="sidebar-menu">
          <div className="sidebar-menu-item" onClick={() => handleMenuClick('Home')}>
            Home
          </div>
          <div className="sidebar-menu-item" onClick={() => handleMenuClick('Projects')}>
            Projects
          </div>
          <div className="sidebar-menu-item active" onClick={() => handleMenuClick('Stuff')}>
            Stuff
          </div>
          <div className="sidebar-menu-item" onClick={() => handleMenuClick('Tasks')}>
            Tasks
          </div>
          <div className="sidebar-menu-item" onClick={() => handleMenuClick('Widgets')}>
            Widgets
          </div>
          <div className="sidebar-menu-item" onClick={() => handleMenuClick('Inbox')}>
            Inbox
          </div>
          <div className="sidebar-menu-item" onClick={() => handleMenuClick('Files')}>
            Files
          </div>
          {/* Add more menu items as needed */}
        </div>
        <div className="sidebar-footer">
          <button>Logout</button>
        </div>
      </div>
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

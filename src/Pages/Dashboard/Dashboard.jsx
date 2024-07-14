import React, { useContext, useEffect, useState } from 'react';
import './Dashboard.css'; // Adjust the path as necessary
import { UserContext } from '../../Context/UserContext';
import { Navigate, useNavigate } from 'react-router-dom';

export const Dashboard = () => {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();
    const [isPopUpProjects, setIsPopUpProjects] = useState(false);
    const handleMenuClick = (menuName) => {
        console.log(`Clicked on ${menuName}`);
        // Add logic to handle menu item clicks, such as changing active state or navigating
    };

    useEffect(()=>{
        if(!user){
        console.log("h")
        }
        else{
            console.log("d")
        }
    })
    useEffect(() => {
        if (!user) {
          navigate('/');
        }
      }, [user,navigate]);

    const openProjectPopUp = () =>{
        setIsPopUpProjects(!isPopUpProjects);
        console.log(isPopUpProjects)
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
                    <h1>Welcome Back, !</h1>
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

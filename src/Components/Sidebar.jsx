import React from 'react'

export const Sidebar = () => {

    const logoutHandle = () =>{
        setUser()
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        
        navigate("/SignIn")
        
      }

  return (
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
          <button onClick={()=>{logoutHandle}}>Logout</button>
        </div>
      </div>
  )
}

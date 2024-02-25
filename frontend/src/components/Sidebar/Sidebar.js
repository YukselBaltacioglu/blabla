import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdExit } from "react-icons/io";
import "./Sidebar.css";



const Sidebar = () => {
  const handleExitClick = () => {
    // Add your exit functionality here,.g., logout or redirect to the login page.
    console.log("Exiting...");
  };

  return (
    <div className="sidebar bg-dark rounded-4 shadow-lg">
      <div className="upper-side flex-column">
        <div className="sidebar-home mt-5">
          <FaHome size={30} />
        </div>
        <div className="sidebar-profil mt-3 ">
          <FaUserFriends size={30} />
        </div>
        <div className="sidebar-settings  mt-3">
          <IoSettingsSharp size={30} />
        </div>
      </div>
      <div className="lower-side mt-auto mb-3">
        <div> 
         <IoMdExit size={30} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

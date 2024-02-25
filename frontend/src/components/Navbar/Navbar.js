import React from "react";
import "./Navbar.css";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";

function Navbar() {
  return (
    <nav className="navbar m-3">
      <div className="left-side  bg-danger p-3 me-2 ms-4 rounded-4 shadow-lg ">
        <div className="trademark-text "> Turkish Trademark Similarity</div>
      </div>
      <div className="right-side p-3 rounded-4 shadow-lg ">
        <div>
          <button className="nav-button btn btn-dark">Anasayfa</button>
        </div>
        <div className="flex-row">
          <button className="nav-button btn btn-dark">Yardım</button>
          <div className="notification-bell">
            <IoIosNotifications size={30} />
          </div>
          <div className="user-container">
            <div className="user-icon me-2">
              <FaCircleUser size={30}  />
            </div>
            <button className="nav-button btn btn-dark ">Hoşgeldiniz</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from "react";
import "./main.css";
import  Home  from "./home";
import Profile from "./profile";
import Thoughts from "./thoughts"
import Explore from "./explore";
import Message from "./message";
import Header from "./header";
import Account from "./account";
import { IoHomeSharp,IoNotificationsOutline } from "react-icons/io5";
import {FaVideo,FaSearch } from "react-icons/fa";
import { FaGripfire } from "react-icons/fa6";
import { BiMessageDetail } from "react-icons/bi";
import Notify from "./notify";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Contact = () => {
  const [currentPage, setCurrentPage] = useState("LoginPage");

  const handleItemClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="body-container">
      <div className="fixed-heading">
        <div className="web-title">
        <div className="logo">
        <FaGripfire />
        </div><div className="sitename">Free<span>lander</span></div>
        </div>
        <div className="right-field">
          <div className="input-box">
            <input type="text" placeholder="search"></input>
            <IoIosSearch />
          </div>
          <div className="button-box">
            <button onClick={() => handleItemClick("LoginPage")}>login</button>
          </div>
        </div>
      </div>
      <div className="scrollabe-heading">
        <button>Agriculture</button>
        <button>Gardening</button>
        <button>Mechanics</button>
        <button>Electronics</button>
        <button>Photography</button>
        <button>Event Manager</button>
        <button>Catering</button>
        <button>tool Rental Manager</button>
        <button>Agri waste Upcycler</button>
        <button>Veterinary</button>
        <button>Dietery</button>
        <button>pharmacy</button>
        <button>cardiovascular</button>
        <button>Construction Manager</button>
      </div>
        <div className="fixed-section">
          <ul>
            <button  onClick={() => handleItemClick("ProfilePage")}>
              <CgProfile className="icons"/>
              <span>profile</span>
            </button>
            <button  onClick={() => handleItemClick("HomePage")}>
              <IoHomeSharp className="icons" />
              <span>Home</span>
            </button>
            <button  onClick={() => handleItemClick("ThoughtsPage")}>
              <FaVideo className="icons"/>
              <span>Thoughts</span>
            </button>
            <button  onClick={() => handleItemClick("ExplorePage")}>
              <FaSearch className="icons"/>
              <span>Explore</span>
            </button>
            <button  onClick={() => handleItemClick("MessagePage")}>
            <BiMessageDetail className="icons"/>
              <span>Message</span>
            </button>
            <button  onClick={() => handleItemClick("NotifyPage")}>
              <IoNotificationsOutline className="icons"/>
              <span>Notifications</span>
            </button>
          </ul>
        </div>
      <div className="scrollable-section">
        {currentPage === "ProfilePage" && <Profile/>}
        {currentPage === "HomePage" && <Home/>}
        {currentPage === "ThoughtsPage" && <Thoughts/>}
        {currentPage === "ExplorePage" && <Explore/>}
        {currentPage === "MessagePage" && <Message />}
        {currentPage === "NotifyPage" && <Notify />}
        {currentPage === "LoginPage" && <Account/>}

      </div>
    </div>
  );
};

export default Contact;

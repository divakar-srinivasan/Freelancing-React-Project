import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="header">
      <div className="logo">Home</div>
      <button className="button" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default Header;

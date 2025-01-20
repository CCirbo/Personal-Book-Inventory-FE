import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./MenuBar.css";

const MenuBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="menu-bar">
      <button
        onClick={() => navigate("/dashboard")}
        className={location.pathname === "/dashboard" ? "active" : ""}
      >
        Dashboard
      </button>
      <button
        onClick={() => navigate("/library")}
        className={location.pathname === "/library" ? "active" : ""}
      >
        Library
      </button>
      <button
        onClick={() => navigate("/loaned_out")}
        className={location.pathname === "/loaned_out" ? "active" : ""}
      >
        Loaned Out
      </button>
      <button
        onClick={() => navigate("/selling")}
        className={location.pathname === "/selling" ? "active" : ""}
      >
          Selling
  </button>
  <button
    onClick={() => alert("Save feature placeholder")}
    className=""
  >
    Save
  </button>
    </div>
  );
};

export default MenuBar;
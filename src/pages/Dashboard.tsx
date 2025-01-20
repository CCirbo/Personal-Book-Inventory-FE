import React from 'react';
import MenuBar from "../components/MenuBar";
import "./PageLayout.css"; 
const Dashboard = () => {
  return (
    <div className="page-layout">
    <MenuBar />
    <div className="page-content">
        <input
          type="text"
          className="search-bar"
          placeholder="Search by ISBN..."
        />
      <h1>Dashboard</h1>
      <p>This is the Dashboard page. Content coming soon!</p>
    </div>
    </div>
  );
};

export default Dashboard;
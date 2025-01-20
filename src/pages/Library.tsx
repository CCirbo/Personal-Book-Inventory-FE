import React from 'react';
import MenuBar from "../components/MenuBar";
import "./PageLayout.css";
const Library = () => {
  return (
    <div className="page-layout">
    <MenuBar />
    <div className="page-content">
      <h1>Library</h1>
      <p>This is the Library page. Content coming soon!</p>
    </div>
    </div>
  );
};

export default Library;
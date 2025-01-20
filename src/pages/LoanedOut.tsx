import React from 'react';
import MenuBar from "../components/MenuBar";
import "./PageLayout.css";
const LoanedOut = () => {
  return (
    <div className="page-layout">
    <MenuBar />
    <div className="page-content">
      <h1>Loaned Out</h1>
      <p>This is the Loaned Out page. Content coming soon!</p>
    </div>
    </div>
  );
};

export default LoanedOut;
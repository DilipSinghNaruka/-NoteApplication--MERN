import React, { useContext, useState } from "react";
import "./HomePage.css"; // Import custom CSS file for HomePage component

import Notes from "./Notes";


function HomePage() {
  return (
    <div className="container">
      <div className="firstDiv">
        <h3 className="title">Hey, This is My ToDo Application</h3>
        
      </div>
      <div className="secondDiv"></div>

      <Notes/>
    </div>
  );
}

export default HomePage;

import React, { useContext } from "react";
import "./About.css"; // Import the CSS file
import noteContext from "../../context/notes/noteContext";


const About = () => {
  const a = useContext(noteContext)
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          We are a team of creative individuals passionate about building
          innovative solutions for our clients. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vivamus iaculis sapien ut lorem cursus,
          ac ultrices ipsum auctor. Nam vel bibendum neque, eu efficitur enim.
        {a.name}
        </p>
        <button className="about-button">Learn More</button>
      </div>
    </div>
  );
};

export default About;

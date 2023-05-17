
import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "../src/components/navbar/Navbar";
import Home from "../src/components/homepage/Homeapage";
import About from "../src/components/aboutpage/About";
import Signin from "../src/components/signin/Signin";
import Signup from "../src/components/signup/Signup";
import NoteState from './context/notes/NoteState';



const App = () => {
  return (
    <NoteState>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
};

export default App;

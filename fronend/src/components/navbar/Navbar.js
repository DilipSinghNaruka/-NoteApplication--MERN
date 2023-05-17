// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css"; // Import the CSS file
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
// const navigate = useNavigate();
//   const logout = ()=>{
//     localStorage.removeItem('token');
//     navigate("/login")
//   }
//   return (
//     <nav className="navbar">
//       <ul className="nav-list">
//         <li className="nav-item">
//           <Link to="/" className="nav-link">
//             Home
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/about" className="nav-link">
//             About
//           </Link>
//         </li>
//         {!localStorage.getItem("token") ? (
//           <div className="nav-list">
//             <li className="nav-item">
//               <Link to="/login" className="nav-link">
//                 Login
//               </Link>
//             </li>
//             <li className="nav-item ">
//               <Link to="/signup" className="nav-link">
//                 Signup
//               </Link>
//             </li>
//           </div>
//         ) : (
//           <button className="nav-link " onClick={logout}>
//             Logout
//           </button>
//           // <Link onClick={logout} className="nav-link">
//           //   Logout
//           // </Link>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;







import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const [navOpen, setNavOpen] = useState(false);
  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-toggle" onClick={handleNavToggle}>
        <span className="navbar-toggle-icon"></span>
      </div>
      <ul className={`nav-list ${navOpen ? "open" : ""}`}>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        {!localStorage.getItem("token") ? (
          <>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/signup" className="nav-link">
                Signup
              </Link>
            </li>
          </>
        ) : (
          <button className="nav-link " onClick={logout}>
            Logout
          </button>
        )}
      </ul>
    </nav>
  );
};


export default Navbar;
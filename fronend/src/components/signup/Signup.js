import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

import "./Signup.css"

const Signup = () => {
  const navigate = useNavigate();

 const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword:"",
  });

  // here we are using fetch api

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Do something with the form data
    const { name, email, password,cpassword} = formData;
    // console.log(formData);
    const res = await fetch("http://localhost:8080/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // formData,
        name,
        email,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    console.log(data);
     if (data.success === true) {
       localStorage.setItem("token", data.authtoken);
       navigate("/login");
     } else {
       alert("invalid credentials");
     }
  }

    const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  
  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name"  onChange={handleInputChange} placeholder="Full Name"  required />
        <input type="email" name="email"  onChange={handleInputChange} placeholder="Email"  required/>
        <input type="password" name="password" onChange={handleInputChange}  placeholder="Password" required />
        <input type="password" name="cpassword" onChange={handleInputChange}  placeholder="cPassword"  required/>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

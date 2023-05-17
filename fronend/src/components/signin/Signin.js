import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../signup/Signup.css";

const Signin = () => {
  const [credi, setCredi] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const onchange = (e) => {
    setCredi({ ...credi, [e.target.name]: e.target.value });
  };

  const handle = async (e) => {
    e.preventDefault();
    const {email,password} = credi;
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    console.log(json);

    if(json.success === true){
      localStorage.setItem('token',json.authtoken)
      navigate("/");
    }else{
      alert("invalid credentials")
    }
  };
  return (
    <div className="signup-container">
      <h1>Sign In</h1>
      <form onSubmit={handle}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={onchange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={onchange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signin;

// import React, { useState } from "react";
// import "../signup/Signup.css";

// const Signin = () => {
//   const [credi, setCredi] = useState({ email: "", password: "" });

//   const onchange = (e) => {
//     setCredi({ ...credi, [e.target.name]: e.target.value });
//   };

//   const handle = async (e) => {
//     e.preventDefault();
//     const { email, password } = credi;
//     const res = await fetch("http://localhost:8080/api/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     });

//     const data = await res.json();
//     console.log(data);
//   };
//   return (
//     <div className="signup-container">
//       <h1>Sign In</h1>
//       <form onSubmit={handle}>
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           onChange={onchange}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           onChange={onchange}
//         />
//         <input type="submit" value="Sign Up" />
//       </form>
//     </div>
//   );
// };

// export default Signin;

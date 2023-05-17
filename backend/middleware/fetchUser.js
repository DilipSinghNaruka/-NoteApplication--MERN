// const jwt = require('jsonwebtoken')

// const JWT_SECURITY = "surayvansi";

// const fetchUser = (req,res, next)=>{
//     const token = req.header('auth-token');
//     if(!token){
//         res.status(401).send({error:"Please authenticate using token"})
//     }
//     try {
//         const data = jwt.verify(token, JWT_SECURITY);
//         req.user = data.user;
//         next();
//     } catch (error) {
//         res.status(401).send({ error: "Please authenticate using token" });
        
//     }
// }








// const jwt = require("jsonwebtoken");
// const JWT_SECURITY = "surayvansi";

// const fetchUser = (req, res, next) => {
//   const token = req.header("auth-token");
//   if (!token) {
//     return res.status(401).send({ error: "Please authenticate using token" });
//   }
//   try {
//     const data = jwt.verify(token, JWT_SECURITY);
//     req.user = data.user;
//     next();
//   } catch (error) {
//     return res.status(401).send({ error: "Please authenticate using token" });
//   }
// };



// const jwt = require("jsonwebtoken");

// const JWT_SECURITY = "surayvansi";

// const fetchUser = (req, res, next) => {
//   const token = req.header("auth-token");
//   if (!token) {
//     return res.status(401).send({ error: "Please authenticate using token" });
//   }
//   try {
//     const data = jwt.verify(token, JWT_SECURITY);
//     req.user = data.user;
//     next();
//   } catch (error) {
//     return res.status(401).send({ error: "Please authenticate using token" });
//   }
// };

var jwt = require("jsonwebtoken");
const JWT_SECRET = "surayvansi";

const fetchuser = (req, res, next) => {
  // Get the user from the jwt token and add id to req object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};



module.exports = fetchuser;



// var jwt = require("jsonwebtoken");
// const JWT_SECRET = "surayvansi";

// const fetchuser = (req, res, next) => {
//   // Get the user from the jwt token and add id to req object
//   const token = req.header("auth-token");
//   if (!token) {
//     res.status(401).send({ error: "Please authenticate using a valid token" });
//   }
//   try {
//     const data = jwt.verify(token, JWT_SECRET);
//     req.user = data.user;
//     next();
//   } catch (error) {
//     res.status(401).send({ error: "Please authenticate using a valid token" });
//   }
// };

// module.exports = fetchuser;

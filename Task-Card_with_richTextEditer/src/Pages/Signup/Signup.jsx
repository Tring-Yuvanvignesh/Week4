// import React from 'react';
// import './signUp.css';
// import googleLogo from '../../Images/google_logo.png';
// import { Link } from 'react-router-dom';

// const SignUp = () => {
//     return (
//         <div className="signup-wrapper">

//           <div className="content-container">
//               <div className="signup-container">
//                   <h2>Sign Up</h2>
                  
//                   <label htmlFor="name">Full Name</label>
//                   <input type="text" id="name" placeholder="Enter your full name" />

//                   <label htmlFor="email">Email</label>
//                   <input type="email" id="email" placeholder="Enter your email" />

//                   <label htmlFor="password">Password</label>
//                   <input type="password" id="password" placeholder="Create a password" />

//                   <button className="register-btn">Register</button>

//                   <div className="signUp-divider">
//                       <hr /> <span>OR</span> <hr />
//                   </div>

//                   <button className="google-signup-btn">
//                       <img src={googleLogo} alt="Google Logo" /> Sign up with Google
//                   </button>

//                   <p className="signin-redirect">
//                       Already have an account? <Link to={'/signIn'}>Sign In</Link>
//                   </p>
//               </div>

//               <div className="signUp-right-section">
//                   <h2>Join Us!</h2>
//                   <p>Sign up to explore more.</p>
//               </div>
//           </div>
//         </div>
//     );
// };

// export default SignUp;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Slicer/authSlice";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from '../../Images/google_logo.png'
import "./signUp.css";

const SignUp = () => {
    const [userDetails, setUserDetails] = useState({ name:"", email: "", password: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(userDetails));
        navigate("/signIn");
    };

    return (
        <div className="signup-wrapper">

          <div className="content-container">
              <div className="signup-container">
                  <h2>Sign Up</h2>
                  
                  <label htmlFor="name">Full Name</label>
                  <input type="text" name="name" placeholder="Enter your full name" onChange={handleChange} />

                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" placeholder="Enter your email" onChange={handleChange}/>

                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" placeholder="Create a password" onChange={handleChange}/>

                  <button className="register-btn" onClick={handleSubmit}>Register</button>

                  <div className="signUp-divider">
                      <hr /> <span>OR</span> <hr />
                  </div>

                  <button className="google-signup-btn">
                      <img src={googleLogo} alt="Google Logo" /> Sign up with Google
                  </button>

                  <p className="signin-redirect">
                      Already have an account? <Link to={'/signIn'}>Sign In</Link>
                  </p>
              </div>

              <div className="signUp-right-section">
                  <h2>Join Us!</h2>
                  <p>Sign up to explore more.</p>
              </div>
          </div>
        </div>
    );
};

export default SignUp;

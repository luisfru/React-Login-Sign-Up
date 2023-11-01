import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
const  LoginSignup  = () => {

    const [activate, setActive] = useState("Login");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{activate}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {activate ==="Login"?<div></div>:<div className="input">
                <img src={user_icon} alt="user" />
                <input type="text" placeholder="Name" />
            </div>}
            <div className="input">
                <img src={email_icon} alt="email" />
                <input type="email" placeholder="Email" />
            </div>
            <div className="input">
                <img src={password_icon} alt="password" />
                <input type="password" placeholder="Password" />
            </div>
        </div>
        <div className="forgot-password">Lost Password? <span>Click Here</span></div>
        <div className="submit-container">
            <div className={activate==="Login"?"submit gray":"submit"} onClick={() => {setActive("Sign Up")}}>Sign Up</div>
            <div className={activate==="Sign Up"?"submit gray":"submit"} onClick={() => {setActive("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup;

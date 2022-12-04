import React from "react";
import { Link } from "react-router-dom";
import HRimg from "../../assets/sanwo-logo.png"
import "./hrlogin.css";


const AdminLogin= ({prevStep})=>{
    return(
        <div className="hrcorelogin_page">
            <div className="image_holder">
                <img src={HRimg}  />
            </div>
            <div className="login_formside">
                <div className="form_details">
                    <div className="switch_users">
                        <button className="admin_chosen" onClick={prevStep}>Staff</button>
                        <button className="staff_chosen" >Admin</button>
                    </div>
                    <div className="loginuser_seg">
                        <p className="Login_text">Login</p>
                        <p className="signin_staffacc">Sign in to your <span className="staff_acc">Staff</span> account</p>
                        <p className="login_emailaddr">Email address</p>
                        <input type="text" className="email_inputlogin"/>
                        <p className="password_emailaddr">Password</p>
                        <input type="text" className="email_inputlogin"/>
                        <p className="forgot_passwordlogin"><Link>Forgot Password?</Link></p>
                        <button className="login_signinbutton">Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin;
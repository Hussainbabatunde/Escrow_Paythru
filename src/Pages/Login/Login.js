import React, { useState } from "react";
import "../Signup/signup.css";
import star from "../../assets/star.png"
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import clientimg from "../../assets/escrowclient.png"
import { Link } from "react-router-dom";


const Login=()=>{

    const [seen, setSeen] = useState(false)

    const handleSeen= ()=>{
        setSeen(!seen)
    }
    return(
        <div className="loginwhole">
            <div className="login_left">
                <div className="welcome_inner">
                    <p className="welcome_text">Login</p>
                    <div>
                        <div className="all_stars">
                            <img src={star} className="star_img"/>
                            <img src={star} className="star_img"/>
                            <img src={star} className="star_img"/>
                            <img src={star} className="star_img"/>
                            <img src={star} className="star_img"/>
                        </div>
                        <p className="landing_star">"We love Landingfolio! Our designers were using it for their projects
                            , so we already knew what kind of design they want."</p>
                            <div className="client_img">
                                <img src={clientimg} width="50px" height="50px"/>
                                <div className="founder_details">
                                    <p className="founder_name">Devon Lane</p>
                                    <p className="founder_comp">Co-Founder, Designoo</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="login_right">
                <p className="paythru_escrow">Paythru Escrow</p>
                <p>with Escrow, you can</p>
                <form className="form_login">
                    <p className="full_name2">Email address</p>
                    <input type="text" className="login_fullname" />
                    <p className="full_name2">Password</p>
                    <div className="password_holder">
                        <input type={seen? "text":"password"} className="passwordinput"/>
                        {seen? <AiFillEyeInvisible onClick={handleSeen}/> : <AiFillEye onClick={handleSeen}/>}
                    </div>
                    <div className="remember_me">
                        <div>
                            <input type="checkbox" />
                            <label>Remember me</label>
                        </div>
                        <p className="create_free">Forgot password?</p>
                    </div>
                    <button type="submit" className="signup_paythru">Login</button>
                    <p className="create_acc">Dont have an account? <Link to="/signup" className="create_free">Create free account</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login;
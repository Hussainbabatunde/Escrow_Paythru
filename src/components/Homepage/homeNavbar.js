import React, { useState } from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "./homeNavbar.css";
import logo from "../../assets/sanwo-logo.png";
import {AiFillCaretDown,AiOutlineSetting, AiFillCaretUp} from "react-icons/ai";
import {CgProfile} from "react-icons/cg"
import {HiMenu} from "react-icons/hi"
import { Link } from "react-router-dom";


const Navbarside=({title})=>{
    const [dropdown, setDropdown] = useState(false)
    const [hamburg, setHamburg] =useState(false)
    const handleDropdown= ()=>{
        setDropdown(!dropdown)
    }
    const handleHamburg=()=>{
        setHamburg(!hamburg)
    }
    return (
    <div className="homenavbar_whole">
        <div className="homewhole_bignav">
        <div className="logo_transact">
        <img src={logo} width="170px" height="40px"/>
        </div>
        <div className="link_otherpage">
            <Link className="pages_linked">Home</Link>
            <Link className="pages_linked">About</Link>
            <Link className="pages_linked">Blog</Link>
            <Link className="pages_linked">Contact</Link>
        </div>
        <div>
            <Link className="start_express">Start Express Transaction</Link>
            <Link className="signup_express">Sign Up</Link>
        </div>
        </div>

        <div className="homewhole_smallnav">
            <div className="second_nav">
        <div className="logo_transact">
        <img src={logo} width="170px" height="40px"/>
        </div>
        <div className="hamburg_drop">
        <HiMenu style={{color:"black", fontSize:"30px", marginTop:"5px", marginLeft:"5px"}} className="hamburgerSign" onClick={handleHamburg}/>
        {hamburg?<div className="homedropdown_regsmall">
        <div className="link_otherpage2">
            <Link className="pages_linked">Home</Link>
            <Link className="pages_linked">About</Link>
            <Link className="pages_linked">Blog</Link>
            <Link className="pages_linked">Contact</Link>
            <Link className="start_express">Start Express Transaction</Link>
            <Link className="signup_express">Sign Up</Link>
        </div>
           
        </div>: ""}
        </div>
        </div>
        </div>
        
    </div>
    )
}

export default Navbarside;
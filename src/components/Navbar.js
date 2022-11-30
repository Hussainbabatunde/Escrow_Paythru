import React, { useState } from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.css";
import logo from "../assets/escrowclient.png";
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
    <div className="navbar_whole">
        <div className="whole_bignav">
        <div className="logo_transact">
        <img src={logo} width="40px" height="40px"/> <span className="brand_name">ESCROW</span>
        <p className="transaction_text">Transaction</p>
        </div>
        <div className="dropdown_reg">
            <Link to={title=="Buy" ? "/" : "/signup"} className={title=="Buy"?"sell_button": "sellred_button"}>{title}</Link>
            <div className="image_profile" onClick={handleDropdown}>
            <img src={logo} width="30px" height="30px"/>
            {dropdown? <AiFillCaretUp style={{color:"white", marginLeft:"10px"}}/> :<AiFillCaretDown style={{color:"white", marginLeft:"10px"}}/>}
            </div>
            {dropdown? <div className="settings_drop">
                <p><CgProfile  style={{color:"black", marginRight:"10px"}}/>Profile</p>
                <p className="settings_reg"><AiOutlineSetting  style={{color:"black", marginRight:"10px", marginTop:"5px"}}/>Settings</p>
            </div>:
             ""}
            {/* <p className="hamburgerSign"><HiMenu style={{color:"white"}}/></p> */}
            
        </div>
        </div>

        <div className="whole_smallnav">
            <div className="second_nav">
        <div className="logo_transact">
        <img src={logo} width="40px" height="40px"/> <span className="brand_name">ESCROW</span>
        <p className="transaction_text">Transaction</p>
        </div>
        <div className="hamburg_drop">
        <HiMenu style={{color:"white", fontSize:"30px", marginTop:"5px", marginLeft:"5px"}} className="hamburgerSign" onClick={handleHamburg}/>
        {hamburg?<div className="dropdown_regsmall">
            <Link to={title=="Buy" ? "/" : "/signup"} className={title=="Buy"?"sell_buttondrop": "sellred_buttondrop"}>{title}</Link>
            <p><CgProfile  style={{color:"black", marginRight:"10px"}}/>Profile</p>
                <p className="settings_reg"><AiOutlineSetting  style={{color:"black", marginRight:"10px", marginTop:"5px"}}/>Settings</p>
        </div>: ""}
        </div>
        </div>
        </div>
        
    </div>
    )
}

export default Navbarside;
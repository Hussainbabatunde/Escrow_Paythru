import React from "react";
import "./profile.css";
import {AiFillEdit} from "react-icons/ai"
import clientimg from "../../assets/trackshipmentweb.png"
import Navbarside from "../../components/Navbar";

const Profile=()=>{
    return (<>
    <Navbarside title="Sell"/>
        <div className="body_detail">
        <div className="profile_whole">
            <p className="profile_text">Profile</p>
            <div className="button_shift">
            <button className="edit_buttonpoint">
                <AiFillEdit style={{color:"rgba(150, 133, 163, 1)"}}/> <span className="edit_but">Edit button</span>
                </button>
            </div>
            <div className="fill_region">
                <img src={clientimg} width="130px" height="130px" className="user_picture"/>
                <div className="name_hold">
                    <p className="fname_user">First Name</p>
                    <input type="text" placeholder="First Name" className="fname_userinput"/>
                </div>
                <div className="name_hold">
                    <p className="fname_user">Last Name</p>
                    <input type="text" placeholder="Last Name" className="fname_userinput"/>
                </div>
                <div className="name_hold">
                    <p className="fname_user">Email</p>
                    <input type="text" placeholder="abc@mail.com" className="email_userinput"/>
                </div>
            </div>
            <div className="fill_region2">
                <div className="addr_reg">
                    <p className="fname_user">Address</p>
                    <input type="text" placeholder="Address" className="addr_userinput"/>
                </div>
            </div>
            <button className="change_psw">Change Password</button>
        </div>
        </div>
        </>
    )
}

export default Profile;
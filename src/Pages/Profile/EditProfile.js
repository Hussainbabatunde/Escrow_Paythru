import React, {useState} from "react";
import "./profile.css";
import {AiFillEdit, AiFillCamera} from "react-icons/ai"
import clientimg from "../../assets/trackshipmentweb.png"

const EditProfile=()=>{
    const [file, setFile] = useState(clientimg);
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className="body_detail">
        <div className="profile_whole">
            <p className="profile_text">Profile</p>
            <div className="button_shift">
            <button className="change_psw">Save Changes</button>
            </div>
            <div className="fill_region">
                <div className="user_col">
                <img src={file} width="130px" height="130px" className="user_picture"/>
                <label for="image_upload" className="camera_img">
                    <AiFillCamera style={{color:"white", fontSize:"25px"}} />
                </label>
                <input type="file" id="image_upload" className="image_uploadfile" onChange={handleChange} />
                </div>
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
    )
}

export default EditProfile;
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import EditProfile from "../Pages/Profile/EditProfile";
import Profile from "../Pages/Profile/Profile";

const PublicRoutes=()=>{
    return(
        <div>
            <Navbar/>
            <Routes>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/editprofile" element={<EditProfile/>}/>
            </Routes>
        </div>
    )
}

export default PublicRoutes;
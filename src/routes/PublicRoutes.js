import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import EditProfile from "../Pages/Profile/EditProfile";
import Profile from "../Pages/Profile/Profile";
import Transactiondetails from "../Pages/Transactiondetails/Transactiondetails";
import BuyerTransaction from "../Pages/Transactions/BuyerTransaction";

const PublicRoutes=()=>{
    return(
        <div>
            {/* <Navbar/> */}
            <Routes>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/editprofile" element={<EditProfile/>}/>
                <Route path="/buyTransact" element={<BuyerTransaction/>}/>
                <Route path="/Transactdetails" element={<Transactiondetails/>}/>
            </Routes>
        </div>
    )
}

export default PublicRoutes;
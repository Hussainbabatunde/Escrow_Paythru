import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import AdminLogin from "../Pages/HrcoreLogin/AdminLogin";
import HRLogin from "../Pages/HrcoreLogin/HRLogin";
import StaffLogin from "../Pages/HrcoreLogin/staffLogin";
import InitiateTransaction from "../Pages/InitiateTransaction/InitiateTransaction";
import EditProfile from "../Pages/Profile/EditProfile";
import Profile from "../Pages/Profile/Profile";
import Transactiondetails from "../Pages/Transactiondetails/Transactiondetails";
import BuyerTransaction from "../Pages/Transactions/BuyerTransaction";
// import staffLogin from "../Pages/HrcoreLogin/staffLogin";


const PublicRoutes=()=>{
    return(
        <div>
            {/* <Navbar/> */}
            <Routes>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/editprofile" element={<EditProfile/>}/>
                <Route path="/buyTransact" element={<BuyerTransaction/>}/>
                <Route path="/Transactdetails" element={<Transactiondetails/>}/>
                <Route path="/initiateTransactions" element={<InitiateTransaction/>}/>
                <Route path="/staffLogin" element={<HRLogin/>}/>
            </Routes>
        </div>
    )
}

export default PublicRoutes;
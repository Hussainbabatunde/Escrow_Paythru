import React, {useState} from "react";
import Navbarside from "../../components/Navbar";
import defaultimg from "../../assets/defaultimg.png";
import "./transactiondetails.css";



const Transactiondetails = () =>{
    
    return(<>
    <Navbarside title="Sell"/>
    <div className="body_detail">
        <div className="profile_whole">
            <p className="profile_text">Transactions</p>
            <p className="profile_text2">Transaction Details</p>
            
            <div className="details_form">
                <div className="img_shown">
                <img src={defaultimg} width="150px" height="150px"/>
                </div>
                <div className="detail_names">
                    <p className="product_name">Product Name: <span className="user_productname">Product Name goes here</span></p>
                    <p className="product_name">Buyer: <span className="user_productname">Name goes here</span></p>
                </div>
                <p className="witness_name">Witness:</p>
                    <input type="text" className="witness_email" placeholder="example@xyz.com"/>
                    <button className="invite_witness">Invite witness</button>
            </div>
            
        </div>
        </div>
        </>
    )
}

export default Transactiondetails;
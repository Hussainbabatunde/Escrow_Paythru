import React, {useState} from "react";
import Navbarside from "../../components/Navbar";
import defaultimg from "../../assets/defaultimg.png";
import "./initiateTransactions.css";
import {BsImageFill} from "react-icons/bs"



const InitiateTransaction = () =>{
    
    return(<>
    <Navbarside title="Sell"/>
    <div className="body_detail">
        <div className="profile_whole">
            <p className="profile_text">Transactions/ <span className="initiate_trans">Initiate Transaction</span></p>
            <p className="profile_text2">Initiate Transaction</p>
            
            <div className="details_form">
                <div className="seller_product">
                    <div className="email_sellerinput">
                        <p className="init_sellersemail">Seller's email address</p>
                        <input type="text" className="input_sellercol" placeholder="example@xyz.com" />
                    </div>
                    <div className="email_sellerinput">
                        <p className="init_sellersemail">Product Name</p>
                        <input type="text" className="input_sellercol" placeholder="Product name goes here" />
                    </div>
                    
                </div>
                <p className="product_sellersemail">Product Description</p>
                    <textarea type="text" className="product_sellercol" placeholder="detailed description of Product" />

                    <p className="product_sellersemail">Upload Image</p>
                    <label htmlFor="upload_initfile" className="uploadimg_shown">
                {/* <img src={defaultimg} width="50px" height="50px"/> */} 
                <BsImageFill style={{width:"50px", height:"50px", color:"#795f8d"}}/>
                <p className="upload_initiatetrans">Upload image</p>
                </label>
                <input type="file" id="upload_initfile" className="upload_initfile"/>
                <div className="inititate_transbutton">
                <button className="initial_transaction">Initiate Transaction</button>
                </div>
            </div>
            
        </div>
        </div>
        </>
    )
}

export default InitiateTransaction;
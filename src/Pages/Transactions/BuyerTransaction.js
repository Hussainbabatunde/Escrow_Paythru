import React, {useState} from "react";
import Navbarside from "../../components/Navbar";
import client from "../../assets/escrowclient.png";
import "./buyertransact.css";
import {AiFillCaretDown,AiOutlineSetting, AiFillCaretUp} from "react-icons/ai";
import TransactionTable from "../../components/TransactionTable";


const BuyerTransaction = () =>{
    const [dropdown, setDropdown] = useState(false)
    const handleDropdown= ()=>{
        setDropdown(!dropdown)
    }
    return(<>
    <Navbarside title="Buy"/>
    <div className="body_detail">
        <div className="profile_whole">
            <p className="profile_text">Transactions</p>
            <p className="profile_text2">Pending (4)</p>
            <div className="pendwhole">
            <div className="pend_column">
                <div className="pend_single">
                <img src={client} width="40px" height="40px"/>
                <p className="pend_text"><span className="pend_person">Maikie Aderiibigbe</span> initiated a transaction. <span className="view_details">view details</span></p>
                </div>
                <div className="pend_single">
                <img src={client} width="40px" height="40px"/>
                <p className="pend_text"><span className="pend_person">Maikie Aderiibigbe</span> initiated a transaction. <span className="view_details">view details</span></p>
                </div>
            </div>
            <div className="pend_column">
                <div className="pend_single">
                <img src={client} width="40px" height="40px"/>
                <p className="pend_text"><span className="pend_person">Maikie Aderiibigbe</span> initiated a transaction. <span className="view_details">view details</span></p>
                </div>
                <div className="pend_single">
                <img src={client} width="40px" height="40px"/>
                <p className="pend_text"><span className="pend_person">Maikie Aderiibigbe</span> initiated a transaction. <span className="view_details">view details</span></p>
                </div>
            </div>
            </div>
            <div onClick={handleDropdown} style={{display:"flex", justifyContent:"flex-end", alignItems:"center"}}>
            {dropdown? <AiFillCaretUp style={{color:"#795F8D", marginLeft:"10px", paddingTop:"5px"}}/> :<AiFillCaretDown style={{color:"#795F8D", marginLeft:"10px", paddingTop:"5px"}}/>}
            <label style={{color:"#795F8D", marginTop:"5px"}}>show more</label>
            </div>

            <p className="profile_text2">Transaction History</p>
            <TransactionTable />
            
        </div>
        </div>
        </>
    )
}

export default BuyerTransaction;
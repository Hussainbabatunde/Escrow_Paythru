import React from "react";
import "./transactiontable.css";
import {BsSearch} from "react-icons/bs"
import {MdFilterAlt} from "react-icons/md"
import Table from 'react-bootstrap/Table';
import Panda from "../assets/Panda.png"

const TransactionTable =() =>{
    return(
        <div className="transacttable">
            <p className="history_text">Transaction History</p>
            <div className="search_whole">
                <div className="search_inputsec">
                    <BsSearch style={{color:"#64748B"}}/>
                    <input type="text" placeholder="Search..." className="input_search"/>
                </div>
                <button style={{color:"#64748B"}} className="button_filter"><MdFilterAlt/> <span>Filter</span></button>
            </div>
            

            {/* transaction table */}
            {/* <div className="table_sec">
            <Table >
      <thead>
        <tr>
          <th></th>
          <th>BUYER</th>
          <th>SELLER</th>
          <th>WITNESS</th>
          <th>STATUS</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox"/></td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><span className="transaction_status">completed</span></td>
          <td className="status_details">view details</td>
        </tr>
        <tr>
          <td><input type="checkbox"/></td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td><span className="transaction_status">completed</span></td>
          <td className="status_details">view details</td>
        </tr>
        <tr>
          <td><input type="checkbox"/></td>
          <td>Larry the Bird</td>
          <td>Thornton</td>
          <td>@twitter</td>
          <td><span className="transaction_status">completed</span></td>
          <td className="status_details">view details</td>
        </tr>
      </tbody>
    </Table>
            </div> */}
            <div className="panda_img">
            <img src={Panda} width="120px" height="130px"/>
            <p>You have no transaction yet</p>
            <button className="initial_transaction">Initiate Transaction</button>
            </div>
        </div>
    )
}

export default TransactionTable
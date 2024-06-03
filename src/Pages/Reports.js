import React from 'react'
import styled from 'styled-components';
import Sidebar from '../component/sidebar';
import Header from '../component/header';
import { IoIosSearch } from "react-icons/io";
import { GoChevronDown } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { MdInventory } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { CiStar } from "react-icons/ci";
import { LuRadioReceiver } from "react-icons/lu";
import { MdOutlinePayments } from "react-icons/md";
import { BiPurchaseTag } from "react-icons/bi";
import { LuActivitySquare } from "react-icons/lu" ;
import { Link } from "react-router-dom";

function Reports() {
  return (
    <>
      <Reportstyle>
      <div className="container-fuild">
            <div className='row'>
               <div className='col-lg-2 '> 
                  <div className='side'>
                   <Sidebar/>
                  </div>
              </div>
              <div className='col-lg-10'>
                  <div className='head'>
                    <Header/> 
                  </div>

                  <div className="report">
                    <div className="reporthead">
                       <h3>Reports</h3>
                       <div className="searchbox">
                       <li className="searchbar"><IoIosSearch/></li>
                       <input type="text" placeholder="Search reports"></input>
                       <li className="godownicon"><GoChevronDown/></li>
                       </div>
                    </div>
                  </div>
                  <div className="row two">
                    <div className="col-lg-4">
                        <h3><span><HiOutlineShoppingCart className="heading"/></span>Sales</h3>
                     <div className="linktext">
                       <div>
                          <Link to=""><span><CiStar /></span>Sales by Customer</Link>
                      </div><br />
                       <div>
                          <Link to=""><span><CiStar /></span>Sales by Item</Link>
                       </div><br />
                       <div>
                          <Link to=""><span><CiStar /></span>Order Fulfillment By Item</Link>
                       </div><br />
                       <div>
                          <Link to=""><span><CiStar /></span>Sales Return History</Link>
                       </div><br />
                       <div>
                          <Link to=""><span><CiStar /></span>Sales by Sales Person</Link>
                       </div><br />
                       <div>
                          <Link to=""><span><CiStar /></span>Packing History</Link>
                       </div>
                     </div>  
                    </div>
                    <div className="col-lg-4">
                      <h3><span><MdInventory className="heading"  /></span>Inventory</h3>
                      <div className="linktext">
                      <div>
                          <Link to=""><span><CiStar /></span>Inventory Summary</Link>
                      </div><br />
                      <div>
                          <Link to=""><span><CiStar /></span>Committed Stock Details</Link>
                      </div><br />
                      <div>
                          <Link to=""><span><CiStar /></span>Inventory Valuation Summary</Link>
                      </div><br />
                      <div>
                          <Link to=""><span><CiStar /></span>FIFO Cost Lot Tracking</Link>
                      </div><br />
                      <div>
                          <Link to=""><span><CiStar /></span>Inventory Aging Summary</Link>
                      </div><br />
                      <div>
                          <Link to=""><span><CiStar /></span>Product Sales Report</Link>
                      </div><br />
                      <div>
                          <Link to=""><span><CiStar /></span>Active Purchase Orders Report</Link>
                      </div><br />
                      <div>
                          <Link to=""><span><CiStar /></span>Stock Summary Report</Link>
                      </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                         <h3><span><GiReceiveMoney className="heading"/></span>Receivables</h3>
                      <div className="linktext">
                      <div>
                          <Link to=""><span><CiStar /></span>Customer Balances</Link>
                      </div><br />
                      <div>
                          <Link to=""><span><CiStar /></span>Invoice Details</Link>
                      </div><br />
                      <div>
                          <Link to=""><span><CiStar /></span>Retainer Invoice Details</Link>
                      </div><br />
                      <div>
                          <Link to=""><span><CiStar /></span>Sales Order Details</Link>
                      </div><br />
                      <div>
                          <Link to=""><span><CiStar /></span>Delivery Challan Details</Link>
                      </div><br />
                      <div>
                          <Link to=""><span><CiStar /></span>Receivable Summary</Link>
                      </div><br />
                      <div>
                          <Link to=""><span><CiStar /></span>Receivable Details</Link>
                      </div>
                      </div>
                    </div>
                  </div>
                  <div className="row three">
                    <div className="col-lg-4">
                        <h3><span><LuRadioReceiver  className="heading"/></span>Payments Received</h3>
                     <div className="linktext">
                     <div>
                          <Link to=""><span><CiStar /></span>Payment Received</Link>
                     </div><br />
                       <div>
                          <Link to=""><span><CiStar /></span>Refund History</Link>
                       </div>
                     </div>  
                    </div>
                    <div className="col-lg-4">
                      <h3><span><MdOutlinePayments className="heading"/></span>Payables</h3>
                      <div className="linktext">
                      <div>
                          <Link to=""><span><CiStar /></span>Vendor Balances</Link>
                      </div><br />
                      <div>
                          <Link to=""><span><CiStar /></span>Bills Details</Link>
                      </div><br />
                      <div>
                          <Link to=""><span><CiStar /></span>Vendor Credits Details</Link>
                      </div><br />
                      <div>
                          <Link to=""><span><CiStar /></span>Payments Made</Link>
                      </div><br />
                      <div>
                          <Link to=""><span><CiStar /></span>Purchase Order Details</Link>
                      </div><br />
                      <div>
                          <Link to=""><span><CiStar /></span>Purchase Orders by Vendor</Link>
                      </div><br />
                      <div >
                          <Link to=""><span><CiStar /></span>Payable Summary</Link>
                      </div><br />
                      <div>
                          <Link to=""><span><CiStar /></span>Payable Details</Link>
                      </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                         <h3><span><BiPurchaseTag className="heading"/></span>Purchases</h3>
                      <div className="linktext">
                      <div>
                          <Link to=""><span><CiStar /></span>Purchases by Item</Link>
                      </div><br />
                      <div>
                          <Link to=""><span><CiStar /></span>Receive History</Link>
                      </div><br />
                      <div>
                          <Link to=""><span><CiStar /></span>Billable Expense Details</Link>
                      </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="row four">
                    <div className="col-lg-4">
                        <h3><span><LuActivitySquare className="heading"/></span>Activity</h3>
                     <div className="linktext">
                     <div>
                          <Link to=""><span><CiStar /></span>System Mails</Link>
                     </div><br />
                       <div>
                          <Link to=""><span><CiStar /></span>Activity Logs & Audit Trail</Link>
                       </div>
                     </div>  
                    </div>
                   </div> */}
                    
                     
                 </div>
            </div>
    </div>

      </Reportstyle>
    </>
  )
}

export default Reports

const Reportstyle = styled.div`
overflow-x: hidden;
//overflow-y: hidden;
.row>div{
  padding-right: 0px;
  padding-left: 0px;
}
.side{
 position: fixed;
}
.head{
  position: fixed;
}
.report {
  margin-top: 65px;
  
}
.report h3{
  margin-top: 10px;
  margin-left: 30px;
}
.reporthead{
  display: flex;
  gap: 20px;
}
.searchbox{
  width: 350px;
  height: 40px;
  background-color: transparent;
  border-radius: 10px;
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  border: 1px solid grey;
}
.searchbox input{
  font-size: 15px;
  border: none;
  outline: none;
  width: 136px;
  background-color: transparent;
}
li{
  list-style-type: none;
}
.searchbar{
  padding-left: 10px;
  padding-top: 5px;
  padding-right: 5px;
}
.godownicon{
  padding-left: 160px;
  padding-top: 5px;
}
.col-lg-10{
  position: relative;
}
.col-lg-10::after{
  content: ''; 
  position: absolute; 
  bottom: 885px; 
  left: 0; 
  width: 100%; 
  height: 1px; 
  background-color: rgba(12, 12, 12, 0.39); 
}
.linktext span{
    color: grey;
    padding-right: 5px;
}
a{
   text-decoration: none;
}
.heading {
     margin-bottom: 5px;
     margin-right: 5px;
}
.col-lg-4 h3{
    font-size: 20px;
}
.two{
  padding-left: 70px;
  padding-top: 60px;
}
.three{
  padding-left: 70px;
  padding-top: 60px;
}
.four .col-lg-4{
    padding-left: 70px;
}
}

`;

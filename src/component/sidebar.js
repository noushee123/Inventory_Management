import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdInventory } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { GrUserSettings } from "react-icons/gr";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { BsGearWide } from "react-icons/bs";
import { BiSolidReport } from "react-icons/bi";
import { HiMiniClipboardDocument } from "react-icons/hi2";
import { useLocation } from "react-router-dom";



const Sidebar = () => {
  const location = useLocation()
    const getPath = (path)=>{
      return location.pathname === path ? "active" : "";
    }
  
  return (
    <div className="Sidebar">
      <SideStyle>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

         <ul className="list">
          <li>
            <div className="inventory">
              <span className="icon">
                <MdInventory />
              </span >
              <div class="d-none d-sm-inline">
              Inventory
              </div>
            </div>
          </li>
            <li className={` ${getPath("/")}  ${getPath("/dashboard")} ${getPath("/gettingstarted")} ${getPath("/announcement")} ${getPath("/recentupdates")}`}>
            <span className="icon">
              <IoHomeOutline />
            </span>
            <Link className="linkyone d-none d-sm-inline" to="/">
              Home
            </Link>
          </li>
          <li>
            <span className="icon">
              <GrUserSettings />
            </span>
             <div class="btn-group d-none d-sm-inline">
                    <buttonbtn-group
                        class="btn dropdown-toggle"
                        type="button"
                        id="triggerId"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                    <span>Inventory</span>
                    </buttonbtn-group>
                    <div
                        class="dropdown-menu dropdown-menu-start"
                        aria-labelledby="triggerId">
                        <Link class="dropdown-item" to="items">Items</Link>
                        <Link class="dropdown-item" to="compositeitems">Composite Items</Link>
                        <Link class="dropdown-item" to="itemgroups">Item Groups</Link>
                        <Link class="dropdown-item" to="pricelists">Price Lists</Link>
                        <Link class="dropdown-item" to="adjustments">Adjustments</Link>
                    </div>
                </div>
          </li>
          <li>
            <span className="icon">
              <MdOutlineShoppingCart/>
            </span>
             <div class="btn-group">
                    <buttonbtn-group
                        class="btn dropdown-toggle sales-toggle"
                        type="button"
                        id="triggerId"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                    <span>Sales</span>
                    </buttonbtn-group>
                    <div
                        class="dropdown-menu dropdown-menu-start"
                        aria-labelledby="triggerId">
                        <Link class="dropdown-item" to="customers">Customers</Link>
                        <Link class="dropdown-item" to="invoices">Sales Orders</Link>
                        <Link class="dropdown-item" to="packages">Packages</Link>
                        <Link class="dropdown-item" to="salesorders">Shipments</Link>
                        <Link class="dropdown-item" to="salesreturns">Invoices</Link>
                        <Link class="dropdown-item" to="shipments">Sales Returns</Link>
                    </div>
                </div>
          </li>
          <li>
            <span className="icon">
              <IoBagHandleOutline />
            </span>
             <div class="btn-group">
                    <buttonbtn-group
                        class="btn  dropdown-toggle"
                        type="button"
                        id="triggerId"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                    <span>Purchases</span>
                    </buttonbtn-group>
                    <div
                        class="dropdown-menu dropdown-menu-start"
                        aria-labelledby="triggerId">
                        <Link class="dropdown-item" to="vendors">Vendors</Link>
                        <Link class="dropdown-item" to="purchaseorders">Purchase orders</Link>
                        <Link class="dropdown-item" to="purchasereceives">Purchase Receives</Link>
                        <Link class="dropdown-item" to="bills">Bills</Link>
                        <Link class="dropdown-item" to="paymentsmade">Payments Made</Link>
                        <Link class="dropdown-item" to="vendorcredits">Vendor Credits</Link>
                    </div>
                </div>
          </li>
          <li className={` ${getPath("/integration")}`}>
            <span className="icon">
            <BsGearWide />
            </span>
            <Link className="linkyone d-none d-sm-inline" to="/integration">
              Integration
            </Link>
          </li>
          <li className={` ${getPath("/reports")}`}>
            <span className="icon">
            <BiSolidReport />
            </span>
            <Link className="linkyone d-none d-sm-inline" to="/reports">
                Reports
            </Link>
          </li>
          <li className={`${getPath("/documents")}`}>
            <span className="icon">
            <HiMiniClipboardDocument />
            </span>
            <Link className="linkyone d-none d-sm-inline" to="/documents">
                Documents
            </Link>
          </li>
        </ul>
            </div>
          </div>
        </div>
        
      </SideStyle>
    </div>
  );
};

export default Sidebar;

const SideStyle = styled.div`

  height: 100%;
  background-color: #4b0082; //rgba(140, 144, 169, 1)
  margin-top: -30px;
  
 .list {
    list-style: none;
     margin-top: 20px;
    
  }
  .inventory {
    padding-top: 15px;
    font-size: 25px;
    display: flex;
    align-item: center;
    justifly-content: center;
    gap: 20px;
    }
  li:hover{
        background-color: #663399;
        border-radius: 10px;
  }
  li {
    width: 206px;
    height: 45px;
    font-size: 25px;
    display: flex;
    margin-top: 40px;
    margin-bottom: 50px;
    margin-right: 10px;
    color: white;
    gap: 7px;
  }
  
  .linkyone
  {
    text-decoration: none;
    color: white;
  }
  .linkseven{
      padding-right: 10px;
  }
  .icon {
    margin-top: -3px;
    padding-left: 10px;
  }
  .btn-group{
    width: 120px;
    height: 45px;
    margin-top: -7px;
    padding: 0px;
  }
  .btn-group span{
    font-size: 25px;
  }
  .btn{
    color: #fff;
    text-align: left;
    margin-left: -7px;
    border: none;
  }
  .dropdown-toggle::after{
    margin-left: 30px;
  }
  .sales-toggle::after{
    margin-left: 80px;
  }
  .active{
     background-color: #00BFFF ;  
     border-radius: 10px;
  }
`;

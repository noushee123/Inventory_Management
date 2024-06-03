import React from 'react'
import styled from 'styled-components';
import Sidebar from './sidebar';
import Header from './header';
import Dashboardhead from './Dashboardhead';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { MdWarehouse } from "react-icons/md";
import { LiaAddressBook } from "react-icons/lia";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";


function Gettingstarted() {
  return (
    <>
    <Gettingstyle>
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
            <div className='dashhead'>
            <Dashboardhead/>
            </div>
            <div className="getting" style = {{ backgroundColor: "rgba(243, 207, 249, 0.4)"}}>
                       <div className="row">
                         <span>Welcome to the company name inventory</span>
                         <div className='secondtext'>company name Inventory is your complete online inventory management solution.Let us help you set up zoho Inventory and manage your stocks effectivly</div>
                        </div>     
                        <div className='row textone'> 
                          <div className='col-lg-6'>
                            <h1><span><HiOutlineShoppingCart/></span>Sales Channels</h1>
                            <p>company name Inventory supports native integrations with shopping carts and marketplaces like company name Commerce, Shopify, Amazon, eBay, and Etsy enabling you to manage your inventory more efficiently while selling from sales channel</p>
                            <button>Configure</button>
                           </div> 
                        <div className='col-lg-6'>
                            <h1><span><MdOutlineLocalShipping /></span>Shipping Channels Integration</h1>
                            <p>Integrate with shipping carriers, shipping aggregators and shipment trackers to deliver packages to your customers and monitor them every step of the way</p>
                            <button>Configure</button>
                        </div> 
                        </div> 
                        <div className='row texttwo'> 
                        <div className='col-lg-6'>
                            <h1><span><MdWarehouse/></span>Warehouses</h1>
                            <p>Create multiple warehouses and manage all of them from a single place effortlessly. You can also configure user-level restrictions for each warehouse to control who has access to your inventory</p>
                            <button>Configure</button>
                        </div> 
                        <div className='col-lg-6'>
                            <h1><span><GiAchievement/></span>Roles and Permissions</h1>
                            <p>Invite users to your Zoho Inventory organization and choose the modules they have access to by configuring granular role-based permissions and assigning it to them</p>
                            <button>Configure</button>
                        </div> 
                        </div>
                        <div className='row textthree'> 
                        <div className='col-lg-6'>
                            <h1><span><LiaAddressBook/></span>Customer Portal</h1>
                            <p>Provide your customers with a self-service portal that lets them view and manage their transactions and contact information by themselves. Your customers can also view the status of their sales orders, make comments, and leave feedback.</p>
                            <button>Configure</button>
                        </div> 
                        <div className='col-lg-6'>
                            <h1><span><MdOutlinePayment /></span>Customer Portal</h1>
                            <p>Receive payments from your customers and pay your bills online by integrating Zoho Inventory with popular payment gateways and banks.</p>
                            <button>Configure</button>
                        </div> 
                        </div>
                  </div> 
            </div>
            </div>
    </div>
    </Gettingstyle>
    </>
  )
}

export default Gettingstarted

const Gettingstyle = styled.div`
overflow-x: hidden;
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
.dashhead{
  position: fixed;
}
.getting{
  margin-top: 170px;
}
.textone,.texttwo,.textthree{
    gap: 40px;
    display:flex;
    justify-content: center;
    padding-top: 60px;
}   
.textone .col-lg-6,.texttwo .col-lg-6,.textthree .col-lg-6{
    width: 500px;
    height: 300px;
    border-radius: 10px;
    background-color: #fff;
    text-align: left;
}
.textone .col-lg-6 h1,.texttwo .col-lg-6 h1,.textthree .col-lg-6 h1{
    font-size: 20px;
    padding-top: 55px;
}
.textone .col-lg-6 p,.texttwo .col-lg-6 p,.textthree .col-lg-6 p{
    font-size: 15px;
    padding-left: 65px;
    padding-right: 10px;
}
.textone .col-lg-6 span,.texttwo .col-lg-6 span,.textthree .col-lg-6 span{
    font-size: 20px;
    margin: 20px;
}
.textone .col-lg-6 button,.texttwo .col-lg-6 button,.textthree .col-lg-6 button{
    font-size: 15px;
    padding: 8px;
    margin-left: 65px;
    border: none;
    border-radius: 10px;
    background-color: purple;
    color: #fff;
}
.getting .row{
    text-align: center;
}
.getting .row span{
    padding-top:60px;
    font-size: 25px;
}
.secondtext{
    color: grey;
    padding-top: 10px;
}

`;

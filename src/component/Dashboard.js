import React from 'react'
import styled from "styled-components";
import Progressbar from './progressbar';
import { SlArrowDown } from "react-icons/sl"
import img2 from '../Pages/images/bed.png';
import img3 from '../Pages/images/sofa.png';
import img4 from '../Pages/images/shirt.png';
import Sidebar from './sidebar';
import Header from './header';
import Dashboardhead from './Dashboardhead';


function Dashboard() {
   const data =[
      { channel: 'Direct Sales', draft: 23, confirmed: 51,packed: 10,shipped: 10,invoiced:40},
   ];
  return (
   <>
<StyleDash>
<div className="container-fuild">
            
            <div className='row'>
            <div className='col-lg-2 '> 
               <div className='side'>
                <Sidebar />
              </div>
            </div>
            <div className='col-lg-10'>
              <div className='head'>
               <Header/> 

              </div>
            <div className='dashhead'>
            <Dashboardhead/>
            </div>
 <div className='dash' style= {{ backgroundColor: 'rgba(249, 248, 248, 1)'}}>  
   <div className="row-12 dashboard">
      <div className="col-md-8">
         <h1>Sales Activity</h1>
         <div className="row">
           <div className="col-lg-3">
             <p1>220</p1>
             <p2>Qty</p2>
             <p3>To be packed</p3>
           </div>
           <div className="col-lg-3">
             <p1>220</p1>
             <p2>Pkgs</p2>
             <p3>To be shipped</p3>
           </div>
           <div className="col-lg-3">
             <p1>220</p1>
             <p2>Pkgs</p2>
             <p3>To be delivered</p3>
           </div>
           <div className="col-lg-3">
             <p1>220</p1>
             <p2>Qty</p2>
             <p3>To be invoiced</p3>
           </div>
       </div>  
     </div>
     <div className="col-md-4">
        <h2>Inventory Summary</h2>
        <div className="col-lg-12">
          <div className="col-lg-6">
             <p4>Quantity in hand</p4>
             <p5>23223</p5>
          </div>
          <div className="col-lg-6">
             <p4>Quantity to be recieved</p4>
             <p5>23223</p5>
          </div>
        </div>
      </div>
   </div>
     <div className="row-12">
      <div className="col-md-6">
        <div className='row-12 product'>
            <h5>Product Details</h5>
        </div>   
          <div className="row-12 productdetail">
          <div className='col-lg-7'>
               <ul>
                  <li className="liOne">Low stock items <span className="noOne">3</span></li>
                  <li>All items Group <span className="noTwo">39</span></li>
                  <li>All items <span className="noThree">190</span></li>
                  <li className="liFour">Unconfirmed item <span className="noFour">121</span></li>
               </ul>
          </div>
          <div className='col-lg-5'>
            <span>Active items</span>
            <Progressbar/>
          </div>
          </div>
      </div>
      <div className="col-md-6">
             <div className="topselling">
                <h5>Top selling</h5>
                <h6>This Month</h6>
                <span><SlArrowDown /></span>
            </div>  
            <div className="images"> 
              <div className="col-lg-4 bed">
                <img src={img2} alt="bed"/>
                <h1>Beds</h1>
                <h5>230<span>Pcs</span></h5>
              </div>
              <div className="col-lg-4 sofa">
                <img src={img3} alt="sofa"/>
                <h1>Sofa</h1>
                <h5>320<span>Pcs</span></h5>
              </div>
              <div className="col-lg-4 shirt">
                <img src={img4} alt="shirt"/>
                <h1>T-shirt</h1>
                <h5>260<span>Pcs</span></h5>
              </div>
            </div>
     </div>
   </div>
   <div className="Purchase">
      <div className="col-lg-3">
            <div className="row-lg-12 order">
               <h1>Purchase Order</h1>
               <h2>This Month</h2>
               <span><SlArrowDown /></span>
            </div>
            <div className="row-lg-12 quantity">
               <h1>Quantity Ordered</h1>
               <h2>2.00</h2>
            </div>
            <div className="row-lg-12 totalcost">
               <h1>Total Cost</h1>
               <h2>Rs-14500.0</h2>
            </div>
      </div>
      <div className="col-lg-9">
         <div className="row-lg-12 salesorder">
               <h1>Sales Order</h1>
               <h2>This Month</h2>
               <span><SlArrowDown /></span>
         </div>
         <div className="row-lg-12 channel">
         <table>
      <thead>
        <tr>
          <th>Channel</th>
          <th>Draft</th>
          <th>Confirmed</th>
          <th>Packed</th>
          <th>Shipped</th>
          <th>Invoiced</th>
        </tr>
      </thead>
      <tbody>
      {data.map((item) => (
          <tr key={item.id}>
            <td>{item.channel}</td>
            <td>{item.draft}</td>
            <td>{item.confirmed}</td>
            <td>{item.packed}</td>
            <td>{item.shipped}</td>
            <td>{item.invoiced}</td>
          </tr>
        ))}
      </tbody>
    </table>
         
           </div>
         </div>
       </div>
     </div>
    </div>
   </div>
 </div>
 
</StyleDash>
    </>
  )
}

export default Dashboard

const StyleDash = styled.div`
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
 .dash{
   margin-top: 170px;
 }
.col-md-8 h1{
    font-size: 25px;
    font-weight: bold;
    padding-top: 20px;
  }
.col-md-4 h2{
   font-size: 25px;
   font-weight: bold;
   padding-left: 20px;
   padding-top: 20px;
}
.col-md-8{
   padding-left: 90px;
   height: 200px;
}
.col-md-8 .row .col-lg-3{
    width: 160px;
    height: 120px;
    margin-right: 15px;
    padding-top: 10px;
    border-radius: 10px;
    background-color: #fff;
}
p1{
    color: rgba(239, 161, 236, 0.99);
    font-weight: bold;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-item: center;
}
p2,p3{
  display: flex;
  flex-direction: coloumn;
  justify-content: center;
  align-item: center;
}
p3{
    font-size: 12px;
}
.col-md-4 .col-lg-12{
    padding-left: 10px;
    padding-top: 1px;
}
.col-lg-12 .col-lg-6{
   width: 240px;
   height: 45px;
   background-color: #fff;
   margin: 10px;
   border-radius: 10px;
   margin-top: 20px;
   display: flex;
   justify-content: left;
   align-items: center;
   gap: 20px;
   padding-left: 10px;
}
 p4,p5{
   font-size: 15px;
}
.row-12 .col-md-6{
       width: 440px;
       height: 240px;
       background-color: #fff;
       border-radius: 10px;
       border: 0.5px solid rgba(12, 12, 12, 0.39);
       margin-left: 320px;
       margin-top: 50px;
       position: relative;
 }
.row-12 .col-md-6::after {
   content: ''; 
   position: absolute; 
   bottom: 180px; 
   left: 0; 
   width: 100%; 
   height: 1px; 
   background-color: rgba(12, 12, 12, 0.39); 
}
.productdetail .col-lg-7::before {
   content: ''; 
   position: absolute; 
   left: 240px; 
   top: 75px; 
   width: 1px; 
   height: 60%; 
   background-color: rgba(12, 12, 12, 0.39); 
}
.productdetail .col-lg-7 ul{
   list-style-type : none;
   padding-left: 40px;
   padding-top: 40px;
   font-size: 18px;
}
h5{
   padding-left: 35px;
   padding-top: 13px;
}
.noOne,.noTwo{
    padding-left: 28px;
}
.noThree{
   padding-left: 81px;
}
.noFour{
   padding-left: 6px;
   color: red;
}
no1{
   color:red;
}
.liOne,.liFour{
   color:red;
}
.product{
   background-color: rgba(236, 234, 240, 1);
   height: 58px;
   width: 439;
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
}
.productdetail{
   display: flex;
   flex-direction: row;
}
.col-lg-5{
   margin-top: 30px; 
   padding-left: 25px;
}
.col-lg-5 span{
   font-weight: 400;
}
.row-12 .col-md-6{
   width:440px;
   height: 240px;
   background-color: #fff;
   margin-left: 90px;
   margin-top: 50px;
   border-radius: 10px;
   border: 0.5px solid rgba(12, 12, 12, 0.39);
   position: relative;
}
row-12 .col-md-6::after {
   content: ''; 
   position: absolute; 
   bottom: 180px; 
   left: 0; 
   width: 100%; 
   height: 1px; 
   background-color: rgba(12, 12, 12, 0.39); 
}
.col-md-6 .bed::before {
   content: ''; 
   position: absolute; 
   left: 150px; 
   top: 75px; 
   width: 1px; 
   height: 60%; 
   background-color: rgba(12, 12, 12, 0.39); 
}

.col-md-6 .sofa::before {
   content: ''; 
   position: absolute; 
   left: 300px; 
   top: 75px; 
   width: 1px; 
   height: 60%; 
   background-color: rgba(12, 12, 12, 0.39); 
}  
.row-12{
   display: flex;
   flex-direction: coloumn;
}
.col-md-6 .topselling{
   display: flex;
   flex-direction: coloumn;
   background-color: rgba(236, 234, 240, 1);
   height: 58px;
   width: 439;
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
}
.col-md-6 .topselling h6{
      margin-left: 200px;
      padding-top: 20px;
      font-size: 15px;
}
.col-md-6 .topselling h5{
      padding-top: 13px;
}
.col-md-6 .topselling span{
   padding-top: 20px;
   font-size: 10px;
   color: blue;
   margin-left: 3px;
}
.bed img{
     width: 50%;
     height: auto;
     object-fit: contain;
     margin-top: 22px;
}
.sofa img{
   width: 50%;
   height: auto;
   object-fit: contain;
   margin-top: 36px;
}
.shirt img{
   width: 40%;
   height: auto;
   object-fit: contain;
   margin-top: 22px;
}
 .images{
   display: flex;
   justify-content: center;
   align-item: center;
   text-align: center;
}
.images h1{
   font-size: 15px;
   margin-top: 6px;
}
.images .sofa h1{
   margin-top: 25px;
}
.images h5{
 margin-left: -35px;
 font-size: 18px;
}
.images h5 span{
   color: grey;
   font-size: 15px;
}
.Purchase{
   display: flex;
   flex-direction: row;
}
.Purchase .col-lg-3{
   width: 350px;
   height: 260px;
   border: 1px solid grey;
   border-radius: 10px;
   background-color: #fff;
   margin-left: 90px;
   margin-top: 50px;
   position: relative;
}
.Purchase .col-lg-9{
   width: 600px;
   height: 260px;
   border: 1px solid grey;
   border-radius: 10px;
   background-color: #fff;
   margin-left: 90px;
   margin-top: 50px;
}
.Purchase .col-lg-3 .order{
     width: 348px;
     height: 55px;
}
.Purchase .col-lg-3 .quantity,
.Purchase .col-lg-3 .totalcost{
   width: 350px;
   height: 93px;
}
.Purchase .col-lg-3 .order{
   display: flex;
   flex-direction: coloumn;
   background-color: rgba(236, 234, 240, 1);
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
}
.Purchase .col-lg-3 .order h1{
   margin-left: 10px;
   padding-top: 14px;
   font-size: 20px;
}
.Purchase .col-lg-3 .order h2{
   padding-top: 19px;
   font-size: 15px;
   margin-left: 95px;
   font-weight: 500;
}
.Purchase .col-lg-3 .order span{
   padding-top: 21px;
   font-size: 10px;
   color: blue;
   margin-left: 3px;
}
.quantity,.totalcost{
   padding-top: 30px;
    text-align: center;
}
.quantity h1,.totalcost h1{
   font-size: 15px;
   font-weight: 400;
}
.quantity h2,.totalcost h2{
   font-size: 20px;
   color: rgba(239, 161, 236, 0.99);
}
.Purchase .col-lg-3::after {
   content: ''; 
   position: absolute; 
   bottom: 202px; 
   left: 0; 
   width: 100%; 
   height: 1px; 
   background-color: rgba(12, 12, 12, 0.39); 
}
.Purchase .col-lg-3::before {
   content: ''; 
   position: absolute; 
   bottom: 100px; 
   left: 35px; 
   width: 80%; 
   height: 1px; 
   background-color: rgba(12, 12, 12, 0.39); 
}
.salesorder{
   height: 55px;
   display: flex;
   flex-direction: row;
   background-color: rgba(236, 234, 240, 1);
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
}
.salesorder h1{
   margin-left: 16px;
   padding-top: 14px;
   font-size: 20px;
}
.salesorder h2{
   padding-top: 19px;
   font-size: 15px;
   margin-left: 370px;
   font-weight: 500;
}
.salesorder span{
   padding-top: 21px;
   font-size: 10px;
   color: blue;
   margin-left: 3px;
}
.channel ul{
   padding-top: 10px;
   padding-left: 13px;
   display: flex;
   gap: 33px;
   //position: relative;
}
.directsale ul{
   padding-top: 20px;
   padding-left: 13px;
   display: flex;
   gap: 33px;
 //  position: absolute;
}
table {
   width: 100%;
   border-collapse: collapse;
 }
 
 th, td {
   border: 1px solid #ddd;
   padding: 8px;
 }
 
 th {
   background-color: #f2f2f2;
   text-align: left;
 }
dashboard{
    margin-right: 0;
    margin-left: 0;
}
`;

3
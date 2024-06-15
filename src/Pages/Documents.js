// import React from 'react'
// import styled from 'styled-components';
// import Header from '../component/header';
// import { MdInventory } from "react-icons/md";
// import { SlArrowLeft } from "react-icons/sl";
// import { IoDocuments } from "react-icons/io5";
// import { IoAdd } from "react-icons/io5";
// import { Link} from "react-router-dom";
// import { MdDelete } from "react-icons/md";
// import { FaRegEnvelope } from "react-icons/fa";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { SlArrowDown } from "react-icons/sl";
// import { RiExpandUpDownLine } from "react-icons/ri";
// import { BiSolidFilePng } from "react-icons/bi";
// import { useState,useEffect } from 'react';

 
// function Documents (){
//   const data =[
//     { id:1,filename: <a href='image.png'><BiSolidFilePng className="png"/>image5.png <br /><button className="processbutton">Processed</button></a>, details:"", uploadedby: 'Alex',uploadedon: '22 sep 2023'},
//     { id:2,filename: <a href='image.png'><BiSolidFilePng className="png"/>image5.png <br /><button className="processbutton">Processed</button></a>, details:"", uploadedby: 'John',uploadedon: '23 sep 2023'},
//     { id:3,filename: <a href='image.png'><BiSolidFilePng className="png"/>image5.png <br /><button className="processbutton">Processed</button></a>, details:"", uploadedby: 'Aeli',uploadedon: '22 sep 2023'},
//     { id:4,filename: <a href='image.png'><BiSolidFilePng className="png"/>image5.png <br /><button className="processbutton">Processed</button></a>, details:"", uploadedby: 'Aeli',uploadedon: '22 sep 2023'}
//  ];


//  const [tableData, setTableData] = useState([]);

//  useEffect(()=>{
//      setTableData(data);
//  },[]);

//  const handleChange = (e) => {
//   const{ id , checked} = e.target;
//   if(id ==="allSelect"){
//      setTableData(tableData.map((item) => {
//        return {...item, isChecked: checked};
//      }))
//   }
//   else{
//   setTableData(tableData.map(item => 
//     item.id === parseInt(id) ? { ...item, isChecked: checked } : item
//   ));
//   }
// };

//   return (
//     <>
//       <Documentstyle>
//       <div className="container-fuild">
//           <div className='row'>
//              <div className='col-lg-2'> 
//                   <div className='side'>
//                  <ul className="list">
//                    <li>
//                      <div className="inventory">
//                      <MdInventory className="icon"/>
//                      <div class="d-none d-sm-inline">
//                      Inventory
//                      </div>
//                      </div>
//                    </li>
//                    <li className="back">
//                     <h1><SlArrowLeft className="backicon"/>Back</h1>
//                    </li>
//                    <li className="document">
//                     <h1>Documents</h1>
//                    </li>
//                    <li className="alldoc">
//                     <h1><IoDocuments className="docicon"/>All Documents</h1>
//                    </li>
//                    <li className="folder">
//                     <h1>FOLDER<IoAdd className="added"/></h1>
//                    </li>
//                    <li className="nofolder">
//                     <h1>There are no folder</h1>
//                    </li>
//                    <li className="create">
//                    <Link>Create New Folder</Link>
//                    </li>
//                    <li className="delete">
//                     <h1><MdDelete className="deleteicon" />Trash</h1>
//                    </li>
//                   </ul> 
//                   </div>
//              </div>
//              <div className='col-lg-10'>
//                   <div className='head'>
//                     <Header/> 
//                   </div>
//                   <div className='file'>
//                       <div className='filehead'>
//                       <h3>Files</h3>
//                       <button className='btnone'><FaRegEnvelope  className='configureicon'/>Configure</button>
//                   <div class="btn-group-one">
//                      <button className='button'><span>Upload File</span></button>
//                       <buttonbtn-group
//                         class="btn-one  dropdown-toggle"
//                         type="button"
//                         id="triggerId"
//                         data-bs-toggle="dropdown"
//                         aria-haspopup="true"
//                         aria-expanded="false"
//                       >
//                       </buttonbtn-group>
//                       <div
//                         class="dropdown-menu dropdown-menu-start"
//                         aria-labelledby="triggerId">
//                         <Link class="dropdown-item" to="vendors">Attach Files Desktop</Link>
//                         <Link class="dropdown-item" to="purchaseorders">Attach From Cloud</Link>
//                       </div>
//                      </div>
//                     <div class="btn-group-three">
//                       <buttonbtn-group
//                         class="btn-three"
//                         type="button"
//                         id="triggerId"
//                         data-bs-toggle="dropdown"
//                         aria-haspopup="true"
//                         aria-expanded="false"
//                       >
//                       <span><BsThreeDotsVertical className='threedoticon'/></span>
//                       </buttonbtn-group>
//                     <div
//                         class="dropdown-menu dropdown-menu-start"
//                         aria-labelledby="triggerId">
//                         <Link class="dropdown-item" to="vendors">SORT BY</Link>
//                         <Link class="dropdown-item" to="purchaseorders">File Name</Link>
//                         <Link class="dropdown-item" to="purchasereceives">Uploaded By</Link>
//                         <Link class="dropdown-item" to="bills">Uploaded On< SlArrowDown className="downicon"/></Link>
//                     </div>
//                 </div>
//                     </div>
//                     <div className='row filter'>
//                      <div> 
//                      <h1>Filter By: <span>Status</span> :</h1>
//                      <div class="btn-group-two">
//                      <buttonbtn-group
//                         class="btn-two  dropdown-toggle"
//                         type="button"
//                         id="triggerId"
//                         data-bs-toggle="dropdown"
//                         aria-haspopup="true"
//                         aria-expanded="false"
//                     >
//                     <span>All</span>
//                     </buttonbtn-group>
//                     <div
//                         class="dropdown-menu dropdown-menu-start"
//                         aria-labelledby="triggerId">
//                         <Link class="dropdown-item" to="vendors">All</Link>
//                         <Link class="dropdown-item" to="purchaseorders">Scan in Progress</Link>
//                         <Link class="dropdown-item" to="purchasereceives">Scan Completed</Link>
//                         <Link class="dropdown-item" to="bills">Scan Failed</Link>
//                     </div>
//                 </div> 
//                 </div>  
//                 <div>
//                   <button><MdDelete /></button>
//                   <div class="btn-group">
//                     <buttonbtn-group
//                         class="btn dropdown-toggle first"
//                         type="button"
//                         id="triggerId"
//                         data-bs-toggle="dropdown"
//                         aria-haspopup="true"
//                         aria-expanded="false"
//                     >
//                     <span>Move to</span>
//                     </buttonbtn-group>
//                     <div
//                         class="dropdown-menu dropdown-menu-start"
//                         aria-labelledby="triggerId">
//                         <Link class="dropdown-item" to="items">Items</Link>
//                         <Link class="dropdown-item" to="compositeitems">Composite Items</Link>
//                         <Link class="dropdown-item" to="itemgroups">Item Groups</Link>
//                         <Link class="dropdown-item" to="pricelists">Price Lists</Link>
//                         <Link class="dropdown-item" to="adjustments">Adjustments</Link>
//                     </div>
//                 </div>
//                 <div class="btn-group">
//                     <buttonbtn-group
//                         class="btn dropdown-toggle second"
//                         type="button"
//                         id="triggerId"
//                         data-bs-toggle="dropdown"
//                         aria-haspopup="true"
//                         aria-expanded="false"
//                     >
//                     <span>Add to</span>
//                     </buttonbtn-group>
//                     <div
//                         class="dropdown-menu dropdown-menu-start"
//                         aria-labelledby="triggerId">
//                         <Link class="dropdown-item" to="items">New Bill</Link>
//                         <Link class="dropdown-item" to="compositeitems">New Purchase Order</Link>
//                         <Link class="dropdown-item" to="itemgroups">New vendor Credits</Link>
//                         <Link class="dropdown-item" to="pricelists">Customer</Link>
//                         <Link class="dropdown-item" to="adjustments">Vendor</Link>
//                         <Link class="dropdown-item" to="pricelists">New Sales Order</Link>
//                         <Link class="dropdown-item" to="adjustments">New Invoice</Link>
//                     </div>
//                 </div>
//                 </div>
//                     </div>
//                     <div>
                      
//                     </div>
//                     <table>
//                         <thead>
                     
//                             <tr >
//                               <th>
//                               <input
//                                  type="checkbox"
//                                  id="allSelect"
//                                  checked={tableData.every(item => item.isChecked)}
//                                  onChange={handleChange}
//                               />
//                               </th>
//                               <th>FILE NAME</th>
//                               <th>DETAILS</th>
//                               <th>UPLOADED BY</th>
//                               <th>UPLOADED ON<RiExpandUpDownLine /></th>
//                             </tr>
                              
//                         </thead>
//                 <tbody>
//                    {tableData.map((item) => (
//                       <tr key={item.id}>
//                         <td>
//                           <input
//                             type="checkbox"
//                             id={item.id}
//                             checked={item?.isChecked || false}
//                             onChange={handleChange}
                           
//                           />
//                         </td>
//                         <td>{item.filename}</td>
//                         <td>{item.details}</td>
//                         <td>{item.uploadedby}</td>
//                         <td>{item.uploadedon}</td>
//                       </tr>
//                     ))}
                   
//               </tbody>
//               </table>
//                   </div>
//              </div>  
//           </div>
//      </div>        

//       </Documentstyle>
//     </>
//   )
// }


// export default Documents

// const Documentstyle = styled.div`
// overflow-x: hidden;

// .row>div{
//   padding-right: 0px;
//   padding-left: 0px;
// }
// // .side{
// //  position: fixed;
// // }
// .head{
//   position: fixed;
// }
// .col-lg-2 .side{
//   height: 100%;
//   width: 252px;
//   position: fixed;
//   background-color: #4b0082; //rgba(140, 144, 169, 1)
// }
// .inventory{
//     margin-top: 20px;
//     margin-left: 10px;
// }
// .icon{
//   margin-bottom: 5px;
//   margin-right: 10px;
// }
// .list{
//   list-style-type: none;
//   font-size: 25px;
//   color: white;
// }
// .backicon{
//   font-size: 10px;
//   margin-right: 5px;
//   margin-bottom: 3px;
// }

// .back h1{
//   font-size: 15px;
//   margin-top: 30px;
//   margin-left: 5px;
// }
// .docicon{
//   font-size: 20px;
//   margin-right: 8px;
//   margin-bottom: 3px;
// }
// .alldoc h1{
//   font-size: 15px;
//   margin-top: 30px;
//   margin-left: 5px;
// }
// .folder h1{
//   color: #B0C4DE;
//   font-size: 15px;
//   margin-top: 30px;
//   margin-left: 5px;
//   font-weight: 400;
// }
// .document h1{
//   font-size: 25px;
//   margin-top: 30px;
//   margin-left: 5px;
// }
// .added{
//   color: #00BFFF;
//   font-size: 20px;
//   margin-left: 120px;
// }
// .nofolder h1{
//   font-size: 15px;
//   font-weight: 400;
//   margin-top: 30px;
//   margin-left: 35px;
// }
// .create{
//   font-size: 15px;
//   margin-top: 15px;
//   margin-left: 35px;
//   color: #00BFFF;
// }
// a{
//   text-decoration: none;
// }
// .delete h1{
//   font-size: 15px;
//   margin-top: 350px;
// }
// .deleteicon{
//   margin-bottom: 5px;
//   font-size: 20px;
//   margin-right: 5px;
// }
// .file{
//   margin-top: 65px;
// }
// .filehead h3{
//   margin-left: 30px;
//   margin-top: 10px;
//   font-size: 25px;
// }
// .filehead{
//   display: flex;
// }
// .btnone{
//   height: 40px;
//   width: 120px;
//   margin-left: 840px;
//   border-radius: 10px;
//   border: none;
//   color: purple;
//   background-color: rgba(236, 234, 240, 1); 
// }
// .btn-three{
//   height: 40px;
//   width: 40px;
//   border-radius: 10px;
//   margin-left: 10px;
//   border: 0.5px solid rgba(12, 12, 12, 0.39);
// }
// .threedoticon{
//     margin-left: 12px;
//     margin-top: 10px;
    
// }
// .configureicon{
//   margin-right: 10px;
// }
// .dropdownicon{
//   margin-left: 15px;
// }
// .filter{
//   height: 70px;
//   margin-top: 5px;
//   background-color: #F2F4F4;
// }
// .filter h1{
//    margin-top: 25px;
//    margin-left: 20px;
//    font-size: 16px;
//    font-weight: 400;
// }
// .filter h1 span{
//    color: grey;
// }
// .btn-group-two{
//   margin-top: -38px;
// }
// .btn-two{
//   color: blue;
//   margin-left: 154px;
//   border: none;
// }
// .btn-two span{
//   color: black;
// }
// .btn-group-one{
//   height: 40px;
//   width: 140px;
//   margin-left: 10px;
//   border-radius: 10px;
//   border: none;
//   color: white;
//   background-color: purple;
// }
// .btn-group-one span{
//   margin-right: 15px;
// }
// .btn-one{
//   color: #fff;
//   font-size: 15px;
//   margin-left:3px;
//   margin-top: 8px;
//   border: none;
// }
// .button{
//   background-color: transparent;
//    border: none;
//    margin-left: 5px;
//    margin-top: 5px;
//    color: #fff;
// }
// .downicon{
//    font-size: 10px;
//    margin-left: 10px;
// }
// table {
//   width: 100%;
//   border-collapse: collapse;
// }

// th, td {
//   border: 1px solid #ddd;
//   padding: 8px;
// }

// th {
//   background-color: #fff; //#f2f2f2
//   text-align: left;
// }
// .png{
//   color: green;
//   margin-right: 10px;
// }
// .processbutton{
//    margin-top: 15px;
//    margin-left: 20px;
//    background-color: transparent;
//    border: 1px solid green;
//    color: green;
//    width: 80px;
//    height: 30px;
// }
// .first{
//   border: none;
//   background-color: grey;
//   color: white;
//   margin: 10px;
// } 
// .second{
//    border: none;
//   background-color: purple;
//   color: white;
//  }    
// `;
import React from 'react';
import styled from 'styled-components';
import Header from '../component/header';
import { MdInventory, MdDelete } from "react-icons/md";
import { SlArrowLeft, SlArrowDown } from "react-icons/sl";
import { IoDocuments, IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiExpandUpDownLine } from "react-icons/ri";
import { BiSolidFilePng } from "react-icons/bi";
import { useState, useEffect } from 'react';

function Documents() {
  const data = [
    { id: 1, filename: <a href='image.png'><BiSolidFilePng className="png" />image5.png <br /><button className="processbutton">Processed</button></a>, details: "", uploadedby: 'Alex', uploadedon: '22 sep 2023' },
    { id: 2, filename: <a href='image.png'><BiSolidFilePng className="png" />image5.png <br /><button className="processbutton">Processed</button></a>, details: "", uploadedby: 'John', uploadedon: '23 sep 2023' },
    { id: 3, filename: <a href='image.png'><BiSolidFilePng className="png" />image5.png <br /><button className="processbutton">Processed</button></a>, details: "", uploadedby: 'Aeli', uploadedon: '22 sep 2023' },
    { id: 4, filename: <a href='image.png'><BiSolidFilePng className="png" />image5.png <br /><button className="processbutton">Processed</button></a>, details: "", uploadedby: 'Aeli', uploadedon: '22 sep 2023' }
  ];

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data);
  }, []);

  const handleChange = (e) => {
    const { id, checked } = e.target;
    if (id === "allSelect") {
      setTableData(tableData.map((item) => {
        return { ...item, isChecked: checked };
      }));
    } else {
      setTableData(tableData.map(item =>
        item.id === parseInt(id) ? { ...item, isChecked: checked } : item
      ));
    }
  };

  const anyChecked = tableData.some(item => item.isChecked);

  return (
    <>
      <Documentstyle>
        <div className="container-fuild">
          <div className='row'>
            <div className='col-lg-2'>
              <div className='side'>
                <ul className="list">
                  <li>
                    <div className="inventory">
                      <MdInventory className="icon" />
                      <div class="d-none d-sm-inline">
                        Inventory
                      </div>
                    </div>
                  </li>
                  <li className="back">
                    <h1><SlArrowLeft className="backicon" />Back</h1>
                  </li>
                  <li className="document">
                    <h1>Documents</h1>
                  </li>
                  <li className="alldoc">
                    <h1><IoDocuments className="docicon" />All Documents</h1>
                  </li>
                  <li className="folder">
                    <h1>FOLDER<IoAdd className="added" /></h1>
                  </li>
                  <li className="nofolder">
                    <h1>There are no folder</h1>
                  </li>
                  <li className="create">
                    <Link>Create New Folder</Link>
                  </li>
                  <li className="delete">
                    <h1><MdDelete className="deleteicon" />Trash</h1>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-10'>
              <div className='head'>
                <Header />
              </div>
              <div className='file'>
                <div className='filehead'>
                  <h3>Files</h3>
                  <button className='btnone'><FaRegEnvelope className='configureicon' />Configure</button>
                  <div class="btn-group-one">
                    <button className='button'><span>Upload File</span></button>
                    <buttonbtn-group
                      class="btn-one  dropdown-toggle"
                      type="button"
                      id="triggerId"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                    </buttonbtn-group>
                    <div
                      class="dropdown-menu dropdown-menu-start"
                      aria-labelledby="triggerId">
                      <Link class="dropdown-item" to="vendors">Attach Files Desktop</Link>
                      <Link class="dropdown-item" to="purchaseorders">Attach From Cloud</Link>
                    </div>
                  </div>
                  <div class="btn-group-three">
                    <buttonbtn-group
                      class="btn-three"
                      type="button"
                      id="triggerId"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span><BsThreeDotsVertical className='threedoticon' /></span>
                    </buttonbtn-group>
                    <div
                      class="dropdown-menu dropdown-menu-start"
                      aria-labelledby="triggerId">
                      <Link class="dropdown-item" to="vendors">SORT BY</Link>
                      <Link class="dropdown-item" to="purchaseorders">File Name</Link>
                      <Link class="dropdown-item" to="purchasereceives">Uploaded By</Link>
                      <Link class="dropdown-item" to="bills">Uploaded On<SlArrowDown className="downicon" /></Link>
                    </div>
                  </div>
                </div>
                <div className='row filter'>
                  {!anyChecked && (
                    <>
                      <div>
                        <h1>Filter By: <span>Status</span> :</h1>
                        <div class="btn-group-two">
                          <buttonbtn-group
                            class="btn-two  dropdown-toggle"
                            type="button"
                            id="triggerId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span>All</span>
                          </buttonbtn-group>
                          <div
                            class="dropdown-menu dropdown-menu-start"
                            aria-labelledby="triggerId">
                            <Link class="dropdown-item" to="vendors">All</Link>
                            <Link class="dropdown-item" to="purchaseorders">Scan in Progress</Link>
                            <Link class="dropdown-item" to="purchasereceives">Scan Completed</Link>
                            <Link class="dropdown-item" to="bills">Scan Failed</Link>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {anyChecked && (
                    <>
                      <div>
                        <button className="deleteicontwo"><MdDelete /></button>
                        <div class="btn-group">
                          <buttonbtn-group
                            class="btn dropdown-toggle first"
                            type="button"
                            id="triggerId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span>Move to</span>
                          </buttonbtn-group>
                          <div
                            class="dropdown-menu dropdown-menu-start"
                            aria-labelledby="triggerId">
                            <Link class="dropdown-item" to="items">FOLDERS</Link>
                            <Link class="dropdown-item" to="compositeitems"><IoAdd/>New Folder</Link>
                          </div>
                        </div>
                        <div class="btn-group">
                          <buttonbtn-group
                            class="btn dropdown-toggle second"
                            type="button"
                            id="triggerId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span>Add to</span>
                          </buttonbtn-group>
                          <div
                            class="dropdown-menu dropdown-menu-start"
                            aria-labelledby="triggerId">
                            <Link class="dropdown-item" to="items">New Bill</Link>
                            <Link class="dropdown-item" to="compositeitems">New Purchase Order</Link>
                            <Link class="dropdown-item" to="itemgroups">New Vendor Credits</Link>
                            <Link class="dropdown-item" to="pricelists">Customer</Link>
                            <Link class="dropdown-item" to="adjustments">Vendor</Link>
                            <Link class="dropdown-item" to="pricelists">New Sales Order</Link>
                            <Link class="dropdown-item" to="adjustments">New Invoice</Link>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div>

                </div>
                <table>
                  <thead>
                    <tr >
                      <th>
                        <input
                          type="checkbox"
                          id="allSelect"
                          checked={tableData.every(item => item.isChecked)}
                          onChange={handleChange}
                        />
                      </th>
                      <th>FILE NAME</th>
                      <th>DETAILS</th>
                      <th>UPLOADED BY</th>
                      <th>UPLOADED ON<RiExpandUpDownLine /></th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <input
                            type="checkbox"
                            id={item.id}
                            checked={item?.isChecked || false}
                            onChange={handleChange}
                          />
                        </td>
                        <td>{item.filename}</td>
                        <td>{item.details}</td>
                        <td>{item.uploadedby}</td>
                        <td>{item.uploadedon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>          
            </div>
          </div>
        </div>
      </Documentstyle>
    </>
  )
}

export default Documents;

const Documentstyle = styled.div`
overflow-x: hidden;

.row>div{
  padding-right: 0px;
  padding-left: 0px;
}
.head{
  position: fixed;
}
.col-lg-2 .side{
  height: 100%;
  width: 252px;
  position: fixed;
  background-color: #4b0082; //rgba(140,144,169,1)
}
.inventory{
    margin-top: 20px;
    margin-left: 10px;
}
.icon{
  margin-bottom: 5px;
  margin-right: 10px;
}
.list{
  list-style-type: none;
  font-size: 25px;
  color: white;
}
.backicon{
  font-size: 10px;
  margin-right: 5px;
  margin-bottom: 3px;
}
.back h1{
  font-size: 15px;
  margin-top: 30px;
  margin-left: 5px;
}
.docicon{
  font-size: 20px;
  margin-right: 8px;
  margin-bottom: 3px;
}
.alldoc h1{
  font-size: 15px;
  margin-top: 30px;
  margin-left: 5px;
}
.folder h1{
  color: #B0C4DE;
  font-size: 15px;
  margin-top: 30px;
  margin-left: 5px;
  font-weight: 400;
}
.document h1{
  font-size: 25px;
  margin-top: 30px;
  margin-left: 5px;
}
.added{
  color: #00BFFF;
  font-size: 20px;
  margin-left: 120px;
}
.nofolder h1{
  font-size: 15px;
  font-weight: 400;
  margin-top: 30px;
  margin-left: 35px;
}
.create{
  font-size: 15px;
  margin-top: 15px;
  margin-left: 35px;
  color: #00BFFF;
}
a{
  text-decoration: none;
}
.delete h1{
  font-size: 15px;
  margin-top: 350px;
}
.deleteicon{
  margin-bottom: 5px;
  font-size: 20px;
  margin-right: 5px;
}
.file{
  margin-top: 65px;
}
.filehead h3{
  margin-left: 30px;
  margin-top: 10px;
  font-size: 25px;
}
.filehead{
  display: flex;
}
.btnone{
  height: 40px;
  width: 120px;
  margin-left: 840px;
  border-radius: 10px;
  border: none;
  color: purple;
  background-color: rgba(236, 234, 240, 1); 
}
.btn-three{
  height: 40px;
  width: 40px;
  border-radius: 10px;
  margin-left: 10px;
  border: 0.5px solid rgba(12, 12, 12, 0.39);
}
.threedoticon{
    margin-left: 12px;
    margin-top: 10px;
}
.configureicon{
  margin-right: 10px;
}
.dropdownicon{
  margin-left: 15px;
}
.filter{
  height: 70px;
  margin-top: 5px;
  background-color: #F2F4F4;
}
.filter h1{
   margin-top: 25px;
   margin-left: 30px;
   font-size: 16px;
   font-weight: 400;
}
.filter h1 span{
   color: grey;
}
.btn-group-two{
  margin-top: -29px;
  margin-left: -8px;
}
.btn-two{
  color: blue;
  margin-left: 154px;
  border: none;
}
.btn-two span{
  color: black;
}
.btn-group-one{
  height: 40px;
  width: 140px;
  margin-left: 10px;
  border-radius: 10px;
  border: none;
  color: white;
  background-color: purple;
}
.btn-group-one span{
  margin-right: 15px;
}
.btn-one{
  color: #fff;
  font-size: 15px;
  margin-left:3px;
  margin-top: 8px;
  border: none;
}
.button{
  background-color: transparent;
   border: none;
   margin-left: 5px;
   margin-top: 5px;
   color: #fff;
}
.downicon{
   font-size: 10px;
   margin-left: 10px;
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
  background-color: #fff; //#f2f2f2
  text-align: left;
}
.png{
  color: green;
  margin-right: 10px;
}
.processbutton{
   margin-top: 15px;
   margin-left: 20px;
   background-color: transparent;
   border: 1px solid green;
   color: green;
   width: 80px;
   height: 30px;
}
.first{
  border: 1px solid grey;
  background-color: rgba(236, 234, 240, 10);
  color: black;
  margin: 10px;
} 
.second{
   border: none;
  background-color: purple;
  color: white;
 }   
.deleteicontwo{
    margin-left: 30px;
    margin-top: 17px;
    border: 1px solid grey;
    border-radius: 10px;
    background-color: rgba(236, 234, 240, 10);
    width: 35px;
    height: 35px;
} 
`;
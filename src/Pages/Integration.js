import React from 'react'
import styled from 'styled-components';
import { RiAddBoxFill } from "react-icons/ri";
import { PiClockClockwiseFill } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { GoChevronDown } from "react-icons/go";
import { FiMenu } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { GoBell } from "react-icons/go";
import { IoPeople } from "react-icons/io5";
import { MdInventory } from "react-icons/md";

function Integration() {
  return (
    <>
      <Integratestyle>
      <div className="container-fuild">
      <div className='head'>   
        <ul className="headicon">
           <li className="inventory"><MdInventory /></li> 
          <li className="add"><RiAddBoxFill/></li>
          <li className="clock"><PiClockClockwiseFill/></li>
          <div className="sbox">
          <li className="search"><IoIosSearch/></li>
          <li className="godown"><GoChevronDown /></li>
          <input type="text" placeholder="Search in Costumers(/)"></input>
          </div>
          <li className="peopleicon"><IoPeople/></li>
          <li className="bellicon"><GoBell/></li>
          <li className="profileicon"><BsPersonCircle /></li>
          <li className="settingicon"><IoSettingsOutline/></li>
          <li className="menuicon"><FiMenu/></li>
        </ul>
      </div>    
     </div>
      </Integratestyle>
    </>
  )
}

export default Integration

const Integratestyle = styled.div`
overflow-x: hidden;
.row>div{
  padding-right: 0px;
  padding-left: 0px;
}
.head{
    background-color :  rgba(236, 234, 240, 1);
    width: 100%;
    height:50px;
   }
   .headicon{
    list-style: none;
    display:flex;
    font-size: 40px;
   }
   .inventory{
    color: rgba(0, 0, 0, 0.68);
    font-size: 25px;
    margin-left: -20px;
   }
   .add{
       color: purple;
       margin-top:-12px;
       margin-left: 10px;
    }
   .clock{
    font-size: 25px;
    margin-left: 10px;
   }
   .search{
       margin-top: -4px;
       font-size: 20px;
       margin-left: 10px;
   } 
   .godown{
     font-size: 15px;
     margin-top: 3px;
   }
   .sbox input{
       font-size: 13px;
       border: none;
       outline: none;
       width: 136px;
       background-color:transparent;
   }
   .sbox{
      width: 200px;
      height: 30px;
      background-color:rgba(243, 207, 249, 0.27);
      border-radius: 10px;
      margin-top: 10px;
      margin-left: 10px;
      display: flex;
      flex-direction: 
   }
  .menuicon{
    font-size: 25px;
    color: rgba(0, 0, 0, 0.68);
  }
  .settingicon{
    font-size: 25px;
    margin-right: 10px;
    color: rgba(0, 0, 0, 0.68);
  }
  .profileicon{
     font-size: 25px;
     color: rgba(0, 0, 0, 0.68);
     margin-right: 10px;
    
  }
  .bellicon{
    font-size: 25px;
    color: rgba(0, 0, 0, 0.68);
    margin-right: 10px;
  
  }
  .peopleicon{
    font-size: 25px;
    color: rgba(0, 0, 0, 0.68);
    margin-left: 950px;
    margin-right: 10px;
   
  }
.head{
  position: fixed;
}

`;
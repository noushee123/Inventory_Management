//  import React from 'react'
//  import { RiAddBoxFill } from "react-icons/ri";
//  import { PiClockClockwiseFill } from "react-icons/pi";
//  import { IoIosSearch } from "react-icons/io";
//  import { GoChevronDown } from "react-icons/go";
//  import { FiMenu } from "react-icons/fi";
//  import { IoSettingsOutline } from "react-icons/io5";
//  import { BsPersonCircle } from "react-icons/bs";
//  import { GoBell } from "react-icons/go";
//  import { IoPeople } from "react-icons/io5";
// import styled from 'styled-components';


//  const Header = () => {
//    return (
//     <>
//      <Container>
//     <div>
//       <div className='head'>   
//         <ul className="headicon">
//           <li className="add"><RiAddBoxFill/></li>
//           <li className="clock"><PiClockClockwiseFill/></li>
//           <div className="sbox">
//           <li className="search"><IoIosSearch/></li>
//           <li className="godown"><GoChevronDown /></li>
//           <input type="text" placeholder="Search in Costumers(/)"></input>
//           </div>
//           <li className="peopleicon"><IoPeople/></li>
//           <li className="bellicon"><GoBell/></li>
//           <li className="profileicon"><BsPersonCircle /></li>
//           <li className="settingicon"><IoSettingsOutline/></li>
//           <li className="menuicon"><FiMenu/></li>
//         </ul>
//       </div>
//     </div>
//      </Container>
//     </>
   
//    )
//  }
 
//  export default Header;
 
//  const Container = styled.div`

//  .head{
//   background-color :  rgba(236, 234, 240, 1);
//   width: 100%;
//   height:50px;
//  }
//  .headicon{
//   list-style: none;
//   display:flex;
//   font-size: 40px;
//  }
  
//  .add{
//      color: purple;
//      margin-top:-12px;
//      margin-left: -18px;
//   }
//  .clock{
//   font-size: 25px;
//   margin-left: 10px;
//  }
//  .search{
//      margin-top: -4px;
//      font-size: 20px;
//      margin-left: 10px;
//  } 
//  .godown{
//    font-size: 15px;
//    margin-top: 3px;
//  }
//  .sbox input{
//      font-size: 13px;
//      border: none;
//      outline: none;
//      width: 136px;
//      background-color:transparent;
//  }
//  .sbox{
//     width: 200px;
//     height: 30px;
//     background-color:rgba(243, 207, 249, 0.27);
//     border-radius: 10px;
//     margin-top: 10px;
//     margin-left: 10px;
//     display: flex;

//  }
// .menuicon{
//   font-size: 25px;
//   color: rgba(0, 0, 0, 0.68);
// }
// .settingicon{
//   font-size: 25px;
//   margin-right: 10px;
//   color: rgba(0, 0, 0, 0.68);
// }
// .profileicon{
//    font-size: 25px;
//    color: rgba(0, 0, 0, 0.68);
//    margin-right: 10px;
  
// }
// .bellicon{
//   font-size: 25px;
//   color: rgba(0, 0, 0, 0.68);
//   margin-right: 10px;

// }
// .peopleicon{
//   font-size: 25px;
//   color: rgba(0, 0, 0, 0.68);
//   margin-left: 750px;
//   margin-right: 10px;
 
// }

// `;
import React from 'react';
import { RiAddBoxFill } from "react-icons/ri";
import { PiClockClockwiseFill } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { GoChevronDown } from "react-icons/go";
import { FiMenu } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { GoBell } from "react-icons/go";
import { IoPeople } from "react-icons/io5";
import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <Container>
        <div>
          <div className='head'>   
            <ul className="headicon">
              <li className="add"><RiAddBoxFill/></li>
              <li className="clock"><PiClockClockwiseFill/></li>
              <div className="sbox">
                <li className="search"><IoIosSearch/></li>
                <li className="godown"><GoChevronDown /></li>
                <input type="text" placeholder="Search in Customers(/)"></input>
              </div>
              <li className="peopleicon"><IoPeople/></li>
              <li className="bellicon"><GoBell/></li>
              <li className="profileicon"><BsPersonCircle /></li>
              <li className="settingicon"><IoSettingsOutline/></li>
              <li className="menuicon"><FiMenu/></li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Header;

const Container = styled.div`
  .head {
    background-color: rgba(236, 234, 240, 1);
    width: 100%;
    height: 50px;
  }

  .headicon {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 25px;
    padding: 0 10px;
  }

  .add {
    color: purple;
    font-size: 35px;
  }

  .clock {
    font-size: 25px;
  }

  .search {
    font-size: 20px;
  } 

  .godown {
    font-size: 15px;
    margin-left: 5px;
  }

  .sbox input {
    font-size: 13px;
    border: none;
    outline: none;
    width: 100%;
    background-color: transparent;
  }

  .sbox {
    width: 200px;
    height: 30px;
    background-color: rgba(243, 207, 249, 0.27);
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  .menuicon,
  .settingicon,
  .profileicon,
  .bellicon,
  .peopleicon {
    font-size: 25px;
    color: rgba(0, 0, 0, 0.68);
  }

  .peopleicon {
    margin-left: auto;
  }

  @media (max-width: 768px) {
    .headicon {
      flex-direction: column;
      align-items: flex-start;
      font-size: 20px;
    }

    .add, .clock, .search, .godown, .menuicon, .settingicon, .profileicon, .bellicon, .peopleicon {
      margin: 5px 0;
    }

    .sbox {
      width: 100%;
      margin: 5px 0;
    }
  }

  @media (max-width: 480px) {
    .headicon {
      font-size: 18px;
    }

    .add, .clock, .search, .godown, .menuicon, .settingicon, .profileicon, .bellicon, .peopleicon {
      font-size: 20px;
    }

    .sbox {
      width: 100%;
      padding: 0 5px;
    }
  }
`;

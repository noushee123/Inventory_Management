//import React,{useState} from 'react'
import styled from "styled-components";
import img1 from '../Pages/images/background.png';
import { Link,useLocation } from "react-router-dom";

function  Homehead() {
    const location = useLocation()
    const getPath = (path)=>{
      return location.pathname === path ? "active" : "";
    }
  return (
    <>
       <HomeheadStyle style={{ backgroundImage: `url(${img1})`}}>
       <div className=" Homeheaditem">
        <Link to="/dashboard" className={` ${getPath("/dashboard")}`}>Dashboard</Link>
        <Link to="/gettingstarted" className={`${getPath("/gettingstarted")}`}>Getting Started</Link>
        <Link to="/announcement" className={`tab-link ${getPath("/announcement")}`}>Announcement</Link>
        <Link to="/recentupdates" className={`tab-link ${getPath("/recentupdates")}`}>Recent Updates</Link>
      </div>
      </HomeheadStyle>
    </>
  )
}

export default Homehead

const HomeheadStyle = styled.div`

margin-top: 50px;
height: 120px;
width: 1250px;

.Homeheaditem{
  display: flex;
  gap: 20px;
  font-size: 20px;
  margin-left: 20px;
  padding-top: 85px
 }
 a{
     text-decoration: None;
     color: black;
 }
.active{
  text-decoration: underline;
  text-decoration-color: rgba(64,122,235,1);
  text-decoration-thickness: 3px;
  text-underline-offset: 0.5em; 
}
`;



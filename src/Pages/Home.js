import React from 'react'
//import Sidebar from '../component/sidebar'
//import Header from '../component/header'
import styled from 'styled-components';
 import Dashboard from '../component/Dashboard';
//import Dashboardhead from '../component/Dashboardhead';

function Home() {
  return (
    <>
    <Homestyle>
         <div><Dashboard/></div>
          {/* <div className="container-fuild">
            
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
                <Dashboardhead/>
                <Dashboard/> 
                </div>
                </div>
        </div>    */}
    </Homestyle>  
    </>
  )
}

export default Home

const Homestyle = styled.div`
//  overflow-x: hidden;
// .row>div{
//   padding-right: 0px;
//   padding-left: 0px;
// }
// .side{
//  position: fixed;
// }
// .head{
//   position: fixed;
// }

`;
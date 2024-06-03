import React from 'react'
import styled from 'styled-components';
import Sidebar from './sidebar';
import Header from './header';
import Dashboardhead from './Dashboardhead';

function Recentupdates() {
  return (
    <>
      <Recentstyle>
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
                  <div className='recent'>
                  <Dashboardhead/>
                  </div>
                
              </div>
            </div>
    </div>

      </Recentstyle>
    </>
  )
}

export default Recentupdates

const Recentstyle = styled.div`
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
.recent{
    margin-top: 170px;
}  
`;

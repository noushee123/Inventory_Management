import React from 'react'
import styled from 'styled-components';
import Sidebar from './sidebar';
import Header from './header';
import Dashboardhead from './Dashboardhead';
import announce from '../Pages/images/announcement.png';

function Announcement() {
  return (
    <>
      <Announcestyle>
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
                 <div className='announce' style= {{ backgroundColor: 'rgba(249, 248, 248, 1)'}}>
                 <img src={announce} alt="Announcement"/>
                 <h1>Never miss an announcement</h1>
                 </div>
                </div>
            </div>
        </div>

      </Announcestyle>
    </>
  )
}

export default Announcement

const Announcestyle = styled.div`
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
.announce{
  width: 100%;
  height: 77vh;
  margin-top: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
}
img{
  margin-left: -90px;
}
.announce h1{
  font-size: 20px;
  margin-top: 400px;
  margin-left: -360px;
}

`;
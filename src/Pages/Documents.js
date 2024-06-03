import React from 'react'
import styled from 'styled-components';
import Sidebar from '../component/sidebar';
import Header from '../component/header';

function Documents() {
  return (
    <>
      <Documentstyle>
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
              </div>  
              </div>
        </div>        

      </Documentstyle>
    </>
  )
}

export default Documents

const Documentstyle = styled.div`
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
`;

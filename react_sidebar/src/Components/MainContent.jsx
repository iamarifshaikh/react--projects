import React from 'react'
import NavigationPage from './NavigationPage';
import Sidebar from './Sidebar';

function MainContent() {
  return (
      <React.Fragment>
          <div className='sidebar'>
              <Sidebar />
              <NavigationPage/>
          </div>
    </React.Fragment>
  )
}

export default MainContent;
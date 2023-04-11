import React, { useState } from 'react'
import Navbar from './Navbar'
import Menu from './Menu';
import {Data} from '../Constant/Data';
import '../App.css'

const Resturant = () => {

  const [menuData, setMenuData] = useState(Data);

  return (
  <div>
      <Navbar setMenuData={setMenuData} />
    <Menu menuData={menuData} />     
  </div>
  )
}

export default Resturant
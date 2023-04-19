import React, { useState } from 'react'
import { Data } from '../Constant/Data';


const uniqueList = [
  ...new Set(
    Data.map((elements) => {
      return elements.category;
    })
  ),
  , "All",
];

const Navbar = ({setMenuData}) => {

  const [menuList, setMenuList] = useState(uniqueList);
  

  const filterItem = (category) => {
    
    if (category === "All") {
      setMenuData(Data);
      return;
    };

    const updateList = Data.filter((elements) => {
      return elements.category === category;
    });
    setMenuData(updateList);
  };

  return (
    <nav className='navbar'>
      <div className="btn-group">
        {menuList.map((elements) => {
          return (
            <button className="btn-group__item" onClick={() => filterItem(elements)}>{elements}</button>
          )
        })} 
      </div>
    </nav>
  )
}

export default Navbar;
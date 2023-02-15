import React from 'react'
import { SideBarData } from './SideBarData';
import "../App.css"
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <div className='Sidebar'>
            <h1>Hello</h1>
            <ul className='SidebarList'>
                {SideBarData.map((val, key) => {
                return (
                    <li className='row'
                        id={window.location.pathname === val.path ? "active" : ""}
                        key={key}
                        onClick={() => { window.location.pathname = val.path }}>
                        <NavLink to={val.link} className="icon-title">
                        <div id='icon'>{val.icon}</div>
                        <div id='title'>{val.title}</div>
                        </NavLink>
                    </li>
                )
                })}
            </ul>
        </div>
    );
}

export default Sidebar;
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';

import { SidebarData } from './SidebarData';

import './style.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h2 className='title'>Pointer Controller</h2>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            {SidebarData.map((item, index) => {
              return (
                <>
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <div className={sidebar ? 'icon-menu' : 'icon'}>
                      {item.icon}
                    </div>
                    <span className={sidebar ? 'span-menu' : 'span'}>{item.title}</span>                                   
                  </Link>
                </li>
                </>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

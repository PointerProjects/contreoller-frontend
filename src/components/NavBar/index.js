import React, { useState } from 'react';
import { GoThreeBars, GoSignOut } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';

import { SidebarData } from './SidebarData';

import perfilImg from '../../assets/perfil.jpg';

import './style.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  function handleLogin() {

  }

  return (
    <>
      <IconContext.Provider value={{ color: '#153243' }}>
        <div className='navbar'>
          <div class='menu'>
            <Link to='#' className='menu-bars'>
              <GoThreeBars onClick={showSidebar} />
            </Link>
            <h2 className='title'>Pointer Controller</h2>
          </div>
          
          <div className='user'>
            <img src={perfilImg} />
            <Link to='/login'>
              <GoSignOut onClick={handleLogin} />
            </Link>
          </div>
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

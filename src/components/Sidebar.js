import React from 'react';
import '../assets/css/style.css';
import { SidebarData } from '../Data/SidebarData';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <nav className='nav-menu'>
        <ul className='nav-menu-items'>
          {SidebarData.map(item => {
            return (
              <li key={item.path} className='nav-text'>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;

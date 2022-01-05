import React from 'react';
// %%@@$$ HEADER IMPORTS $$@@%%
import '../assets/css/style.css';
import logo from '../assets/images/brand_logo.svg';
import bars from '../assets/images/bars.svg';
import times from '../assets/images/times.svg';

function Header({ onToggleSidebar, showSidebar }) {
  return (
    <>
      <header className='amat-header amat-header-expand fixed-top'>
        <div className='amat-header-top'>
          <div className='amat-header-left'>
            <button className='homeBars' onClick={onToggleSidebar}>
              {!showSidebar ? (
                <img className='bars' src={bars} alt='bars' />
              ) : (
                <img className='times' src={times} alt='times' />
              )}
            </button>
            <span className='org-logo-container'>
              <img className='org-logo' src={logo} alt='Logo' />
            </span>
            <span className='divider-line'></span>
            <span className='product-name'>
              <div className='amat-product-name'>
                <div className='platform'>GIS</div>
                <div className='product'>UI Framework</div>
              </div>
            </span>
          </div>
          {/* %%@@$$ HEADER USER $$@@%% */}
        </div>
      </header>
    </>
  );
}

export default Header;

import React from 'react';
import './Nav.css';
import NavLink from './NavLink.js'

const Nav = ({activeTab, onTabChange, cart}) => {
  return(
    <nav className="App-nav">
      <ul>
        <li className={`App-nav-item ${activeTab === 0 && 'selected'}`}>
          <NavLink index={0} onClick={onTabChange}>Item</NavLink>
        </li>
        <li className={`App-nav-item ${activeTab === 1 && 'selected'}`}>
          <NavLink index={1} onClick={onTabChange}>Cart</NavLink>
        </li>
      </ul>
      <div className="App-nav-itemCount">
        {cart.length} {cart.lenght === 1 ? 'item' : 'items'}
      </div>
    </nav>
  );
}

export default Nav;

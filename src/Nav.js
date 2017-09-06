import React from 'react';
import './Nav.css';
import NavLink from './NavLink';
import {items} from './static-data';

const Nav = ({activeTab, onTabChange, cart}) => {
  let totalCount = () => {
    //How many of eack id in the cart
    let itemsCount = cart.reduce((itemsCount, itemId) => {
      itemsCount[itemId] = itemsCount[itemId] || 0;
      itemsCount[itemId]++;
      return itemsCount;
    }, {});
    let cartTotal = Object.keys(itemsCount)//returns array of keys-ids
    //iterate through the array of ids
    .map(itemId => {
      //to find an object with id like
      var item = items.find( item =>
        item.id === parseInt(itemId, 10)
      );
      //push into the object new property count and return an array of cart objects
      return {
        ...item,
        count: itemsCount[itemId]
      }
    })
    //find total price for the items in the cart objects
    .map(item => {
      return item.count * item.price;
    })
    //find sum of all total p
    .reduce((sum, el) => {
      sum = sum + el;
      return sum;
    }, 0);
    return cartTotal;
  }
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
        <span><i className="fa fa-shopping-cart fa-lg" aria-hidden="true"/></span>
        <span> {cart.length} {cart.lenght === 1 ? 'item' : 'items'}</span>
        <span> ($ {totalCount()})</span>
      </div>
    </nav>
  );
}

export default Nav;

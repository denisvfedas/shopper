import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import ItemPage from './ItemPage';
import CartPage from './CartPage';
import {items} from './static-data';

class App extends Component {
  state = {
    activeTab: 0,
    cart: []
  };

  handleTabChange = (index) => {
    this.setState({
      activeTab: index
    });
  }

  handleAddToCart = (item) => {
    this.setState({
      cart: [...this.state.cart, item.id]
    });
  }

  renderContent() {
    switch (this.state.activeTab) {
      default:
      case 0: return <ItemPage items={items} onAddToCart={this.handleAddToCart}/>;
      case 1: return this.renderCartPage();
    }
  }

  renderCartPage() {
    //create array of objects with item id as a key and item counts as a value
    let itemCounts = this.state.cart.reduce((items, itemId) => {
      items[itemId] = items[itemId] || 0;
      items[itemId]++;
      return items;
    }, {});
    console.log('itemCounts', itemCounts);
    //create array of items for CartPage
    let cartItems = Object.keys(itemCounts)//returns array of item ids (keys of cartItems)
      //map's through item id array
      .map(itemId => {
        //find in array of objects {items} an object which id = itemId
        var item = items.find(item => item.id === parseInt(itemId,10));
      //create an array of items adding new property count
      console.log('item', item);
      return {
        ...item,
        count: itemCounts[itemId]
      }
      });
      console.log('cartItems', cartItems);
    return(
      <CartPage items={cartItems}/>
    );
  }

  render() {
    let activeTab = this.state.activeTab;
    return(
      <div className="App">
        <Nav
          activeTab={activeTab}
          onTabChange={this.handleTabChange}
          cart={this.state.cart}
        />
        <main className="App-content">
          {this.renderContent()}
        </main>
      </div>
    );
  };
}

export default App;

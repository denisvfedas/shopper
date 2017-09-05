import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import ItemPage from './ItemPage';
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
      case 1: return <span>Cart</span>;
    }
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

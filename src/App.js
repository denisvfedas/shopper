import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';

class App extends Component {
  state = {
    activeTab: 0
  };

  handleTabChange = (index) => {
    this.setState({
      activeTab: index
    });
  }

  renderContent() {
    switch (this.state.activeTab) {
      default:
      case 0: return <span>Item</span>;
      case 1: return <span>Cart</span>;
    }
  }

  render() {
    let activeTab = this.state.activeTab;
    return(
      <div className="App">
        <Nav activeTab={activeTab} onTabChange={this.handleTabChange}/>
        <main className="App-content">
          {this.renderContent()}
        </main>
      </div>
    );
  };
}

export default App;

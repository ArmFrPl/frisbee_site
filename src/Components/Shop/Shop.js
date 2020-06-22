//Dependencies
import React, { Component } from 'react';
//Internals
import AllItems from './ShopItem';
import './index.css';

class Shop extends Component {
  render() {
    return (
      <div className="items-wrapper">
        <div className="items-title">
          <h4>All Items</h4>
        </div>
        <AllItems />
      </div>
    );
  }
}

export default Shop;

import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

const Item = ({item, onAddItem}) => (
  <div className="Item">
    <div className="Item-left">
      <div className="Item-image"/>
      <div className="Item-title">
        {item.name}
      </div>
      <div className="Item-description">
        {item.description}
      </div>
    </div>
    <div className="Item-right">
      <div className="Item-price">
        ${item.price}
      </div>
      <button className="Item-addToCart" onClick={onAddItem}>
        Add to cart
      </button>
    </div>
  </div>
);
Item.propTypes = {
  item: PropTypes.object.isRequired,
  onAddItem: PropTypes.func.isRequired
}
export default Item;

import React from 'react';
import PropTypes from 'prop-types';
import './ItemPage.css';
import Item from './Item';

function ItemPage({items, onAddToCart}){
  return(
    <ul className="ItemPage-items">
      {items.map(item =>
        <li className="ItemPage-item" key={item.id}>
          <Item item={item} onAddItem={() => onAddToCart(item)}/>
        </li>
      )}
    </ul>
  );
}
ItemPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default ItemPage;

import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

function CartPage({items, onAddOne, onRemoveOne}) {
  return(
    <ul className="CartPage">
      {items.map(item =>
        <li key={item.id} className="CartPage-item">
          <Item item={item}>
            <button
              className="onRemoveOne"
              onClick={() => onRemoveOne(item)}>
                &ndash;
            </button>
            <span>{item.count}</span>
            <button
              className="onAddOne"
              onClick={() => onAddOne(item)}>
                +
            </button>
          </Item>
        </li>
      )}
    </ul>
  );
}
CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired
}

export default CartPage;

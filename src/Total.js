import React from 'react';
import PropTypes from 'prop-types';

function Total({items}) {
  let total = items.map(item => {
    return item.count * item.price
  }).reduce((acc, el) => {
    acc = acc + el;
    return acc;
  }, 0);
  return(
    <span>{total}</span>
  );
}
Total.propTypes = {
  items: PropTypes.array.isRequired
}

export default Total;

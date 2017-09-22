/**
 * Created by jangminsuk on 2017. 6. 10..
 */
import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({ number, color, index, onIncrement, onDecrement, onSetColor }) => (
  <div
    className="Counter"
    onClick={() => onIncrement(index)}
    onContextMenu={
      (e) => {
        e.preventDefault();
        onDecrement();
      }
    }
    onDoubleClick={() => onSetColor(index)}
    style={{ backgroundColor: color }}
    role="button"
    tabIndex="0"
  >
    {number}
  </div>
);

Counter.propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  index: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
};

Counter.defaultProps = {
  number: 0,
  color: 'black',
  index: 0,
  onIncrement: () => console.warn('onIncrement not defined'),
  onDecrement: () => console.warn('onDecrement not defined'),
  onSetColor: () => console.warn('onSetColor not defined')
};

export default Counter;

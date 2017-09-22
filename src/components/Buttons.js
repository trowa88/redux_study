/**
 * Created by jangminsuk on 2017. 6. 10..
 */
import React from 'react';
import PropTypes from 'prop-types';

import './Buttons.css';

const Buttons = ({ onCreate, onRemove }) => {
  return (
    <div className="Buttons">
      <div
        className="btn add"
        onClick={onCreate}
        role="button"
        tabIndex="0"
      >
        생성
      </div>
      <div
        className="btn remove"
        onClick={onRemove}
        role="button"
        tabIndex="0"
      >
        제거
      </div>
    </div>
  );
};

Buttons.propTypes = {
  onCreate: PropTypes.func,
  onRemove: PropTypes.func
};

Buttons.defaultProps = {
  onCreate: () => console.warn('onCreate not defined'),
  onRemove: () => console.warn('onRemove not defined')
};

export default Buttons;

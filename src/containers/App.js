/**
 * Created by jangminsuk on 2017. 6. 10..
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../modules';
import { getRandomColor } from '../utils';
import Buttons from '../components/Buttons';
import CounterListContainer from './CounterListContainer';

class App extends Component {
  render() {
    const { onCreate, onRemove } = this.props;
    return (
      <div className="App">
        <Buttons
          onCreate={onCreate}
          onRemove={onRemove}
        />
        <CounterListContainer />
      </div>
    );
  }
}

const mapToDispatch = dispatch => ({
  onCreate: () => dispatch(actions.create(getRandomColor())),
  onRemove: index => dispatch(actions.remove(index))
});

App.propTypes = {
  onCreate: PropTypes.func,
  onRemove: PropTypes.func
};

App.defaultProps = {
  onCreate: () => console.warn('App: onCreate not defined'),
  onRemove: () => console.warn('App: onRemove not defined')
};

export default connect(null, mapToDispatch)(App);

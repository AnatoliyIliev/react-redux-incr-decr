import React from 'react';
// import { connect } from 'react-redux';
import Controls from './Controls';
import Value from './Value';
// import * as actions from '../../redux/counter/counter-actions';
import './Counter.css';

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
}

export default Counter;

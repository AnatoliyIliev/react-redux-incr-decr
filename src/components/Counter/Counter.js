import React from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import * as actions from '../../redux/actions';
import Value from './Value';
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

const mapStateToProps = state => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: stepValue => dispatch(actions.increment(stepValue)),
    onDecrement: stepValue => dispatch(actions.decrement(stepValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

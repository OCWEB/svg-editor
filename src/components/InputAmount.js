import React from 'react';
import './InputAmount.scss';


const InputAmount = (props) => {
  const unit = props.unit || ''
  const value = props.value || 0

  return (
      <div className="button-amount">
        <div className="decrease" onClick={ () => props.handleDecrease() }>-</div>
        <input onChange={(e) => props.handleChange(e)}
          value={value + unit}
          type="text" />
        <div className="increase" onClick={ () => props.handleIncrease() }>+</div>
      </div>
  )

}


export default InputAmount;

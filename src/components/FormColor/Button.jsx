import React from 'react';

const Button = (props) =>
  <button
    className={props.className}
    onClick={props.function}
    style={{backgroundColor : props.color}}>
    {props.text}
  </button>;

export default Button;

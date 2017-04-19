import React from 'react';

const InputColor = (props) =>
  <p>
      <input type="text" name={props.name} maxLength="20" required="true" placeHolder="dark blue" onChange={props.handleChange}/>
  </p>;


export default InputColor;

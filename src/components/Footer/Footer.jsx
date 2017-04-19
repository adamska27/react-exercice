import React from 'react';

const Footer = (props) =>
  <div className="footer" style={props.objStyle}>
    <p>{props.text}</p>
  </div>;

export default Footer;

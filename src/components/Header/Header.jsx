import React from 'react';
import logo from '../../images/chuck-norris.jpg';

const Header = (props) =>
<div className="App-header" style={props.objStyle}>
    <img src={logo} className="App-logo" alt="logo"/>
    <h2>Welcome to the world of color</h2>
</div>

export default Header;

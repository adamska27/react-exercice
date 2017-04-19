import React from 'react';
import ListItem from '../ListItem.jsx';
import './ColorList.css';

const ColorList = (props) =>
<ul>
    {props.colors.map((item, i) =>
      <ListItem key={i}
        color={item.color}
        name={item.name}
        changeColor={props.changeColor}
      />
    )
    }
</ul>;

export default ColorList;

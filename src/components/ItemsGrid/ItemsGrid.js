import React from 'react';

import './ItemsGrid.css';

import Item from '../Item/Item';

function ItemsGrid(props) {
  console.log(props)
  return (
    <div className="ItemsGrid">
      {
          props.items.map((item, index) => {
              return <Item key={index} time={item.time} day={item.day}></Item>
          })
      }
    </div>
  )
}

export default ItemsGrid;

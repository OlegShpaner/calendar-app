import React, { useState } from 'react';

import './Item.css';

function Item(props) {
  const [events, addEvent] = useState([]);

  function handleClick(e) {
    let sign = prompt("Event title?");

    if (!sign) {
      return;
    }

    addEvent(prevValues => {
      return [...prevValues, {
        time: props.time,
        name: sign
      }];
    });
  }
  return (
    <div className="item" onClick={handleClick}>
      {
          events.map((event, i) => {
            return <div className="event" key={i}>{event.time} {event.name}</div>
          })
      }
    </div>
  )
}

export default Item;

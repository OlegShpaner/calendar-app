import React from 'react';

import './WeekDays.css';

function WeekDays(props) {
  
  return (
    <div className="WeekDays">
      {
          props.days.map((day, index) => {
              return <div className="day" key={index}>
                {day}
              </div>
          })
      }
    </div>
  )
}

export default WeekDays;

import React from 'react';

import './TimeLine.css';

function TimeLine(props) {
  
  return (
    <div className="TimeLine">
      {
          props.times.map((time, index) => {
              return <div className="time" key={index}>
                {time}
              </div>
          })
      }
    </div>
  )
}

export default TimeLine;

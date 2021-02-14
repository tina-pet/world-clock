import React from 'react';
import Clock from 'react-live-clock';
import 'moment-timezone';
import '../style.css';

export const LiveClock = (props) => {
  return (
    <div className="clock-container">
      <p className="text">
        Current time in {props.timezone} is: {''}
      </p>
      <Clock
        format={'HH:mm:ss'}
        ticking={true}
        timezone={props.timezone}
        className="time"
      />
    </div>
  );
};

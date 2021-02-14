import React, { useState, useEffect } from 'react';
import { LiveClock } from './LiveClock.jsx';
import { Time } from './Time.jsx';
import '../style.css';

export const Timezones = () => {
  const [zones, setZones] = useState([]);
  const [timezone, setTimezone] = useState('Europe/Prague');

  useEffect(() => {
    fetch('http://worldtimeapi.org/api/timezone')
      .then((response) => response.json())
      .then((json) => setZones(json))

      .catch((err) => console.error(err.message));
  }, []);

  const handleTimezoneChange = (e) => {
    setTimezone(e.target.value);
    e.preventDefault;
  };

  return (
    <>
      <LiveClock timezone={timezone} />
      <form className="form">
        <label className="label">Select timezone here: {''}</label>
        <select
          value={timezone}
          onChange={handleTimezoneChange}
          className="zone-selection"
        >
          {zones.map((zone, idx) => (
            <option key={idx} value={zone} className="timezone">
              {zone}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};

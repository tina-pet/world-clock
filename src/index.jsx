import React from 'react';
import { render } from 'react-dom';
import { Timezones } from './components/Timezones.jsx';
import './index.html';
import './style.css';

const App = () => {
  return (
    <div className="main-wrap">
      <Timezones />
    </div>
  );
};
render(<App />, document.querySelector('#app'));

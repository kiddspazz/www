import React from 'react';
import ReactDOM from 'react-dom';
import Programming from '..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Programming />, div);
});

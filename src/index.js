import React from 'react';
import ReactDOM from 'react-dom';

import PrimeReact from 'primereact/api';


import './index.css';
import IkeWeat from './IkeWeat';

PrimeReact.ripple = true;

ReactDOM.render(
    <IkeWeat />,
  document.getElementById('root')
);


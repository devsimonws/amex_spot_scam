import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import Launch from './component/launch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Launch />
  </React.StrictMode>
);
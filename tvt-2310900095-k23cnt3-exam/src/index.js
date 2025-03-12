import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TvtApp from './TvtApp';
import reportWebVitals from './reportWebVitals';

const tvtRoot = ReactDOM.createRoot(document.getElementById('tvtRoot'));
tvtRoot.render(
  <React.StrictMode>
    <TvtApp />
  </React.StrictMode>
);

reportWebVitals();

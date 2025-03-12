import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TvcApp from './TvcApp';

const tvc_root = ReactDOM.createRoot(document.getElementById('Tạ Văn Tân'));
tvc_root.render(
  <React.StrictMode>
    <TvcApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
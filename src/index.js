import React from 'react';
import ReactDOM from 'react-dom/client';
import './styling/global.scss';
import reportWebVitals from './reportWebVitals';
import Landing from './screens/index/Landing';


// this is where i will be routing later on
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

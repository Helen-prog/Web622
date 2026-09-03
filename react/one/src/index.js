import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let text = "My site";
let slogan = "I am learning React";

root.render(
  <React.StrictMode>
    <App text={text} slogan={slogan} />
  </React.StrictMode>
);



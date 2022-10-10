import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import { App } from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

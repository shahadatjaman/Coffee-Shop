import React from 'react';

import { Provider } from 'react-redux';

import ReactDOM from 'react-dom/client';

import App from './App';

import reportWebVitals from './reportWebVitals';

import "swiper/css";

import "swiper/css/pagination";

import "swiper/css/navigation";

import decoder from "jwt-decode"

import * as Types from "./store/types/types"

import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const token = localStorage.getItem("auth_token");

if (token) {
  const decode = decoder(token);
  store.dispatch({
    type: Types.SET_USER,
    payload: {
      user: decode,
    },
  });
}

root.render(
  <Provider store={store}>
  <React.StrictMode>
    
      <App />
  
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

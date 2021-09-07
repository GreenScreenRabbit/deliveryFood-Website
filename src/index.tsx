import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import MainPage from './mainPage'
import { store } from './createStore'
import { Provider } from 'react-redux';
import MainSlider from './mainSlider'
import FoodSection from './foodSection/foodSection';
import Header from './navbar/navbar'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>

        <MainPage />

        <App />
      </React.StrictMode>
    </BrowserRouter >
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

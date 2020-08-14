import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDk5TBEzWCi9F0Sh0-2eIqVksb3T_81g-Q",
  authDomain: "brewer-weather-app.firebaseapp.com",
  databaseURL: "https://brewer-weather-app.firebaseio.com",
  storageBucket: "brewer-weather-app.appspot.com",
}

firebase.initializeApp(config)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

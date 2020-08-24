import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {CometChat} from '@cometchat-pro/chat'
import {BrowserRouter} from 'react-router-dom'


var appID = "22121a4ddaeaf0f";
var region = "us";


var appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
CometChat.init(appID, appSetting).then(() => {

    if(CometChat.setSource) {
      CometChat.setSource("ui-kit", "web", "reactjs");
    }
    console.log("Initialization completed successfully");
    ReactDOM.render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
    , document.getElementById('root'));
  },
  error => {
    console.log("Initialization failed with error:", error);
  }
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

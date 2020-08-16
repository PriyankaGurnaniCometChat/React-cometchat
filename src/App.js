import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Message } from './components/Message';
import { Login } from './components/login';
import {ProtectedRoute} from './constant/ProtectedRoute'
import { AuthProvider } from './context/authcontext';

function App() {
  return ( 
    <BrowserRouter>
      <AuthProvider>
       <Switch>
        <Route path='/' exact component={Login}/> 
        <ProtectedRoute path='/message' component={Message}/>
      </Switch>
      </AuthProvider>
    </BrowserRouter>
  
  );
}

export default App;
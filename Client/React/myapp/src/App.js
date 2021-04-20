import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './form/Form';
import Display from './form/Display';
import Update from './form/Update';

const App = ()=> {
   return(
     <Switch>
     <Route path="/" component={Form} exact/>
     <Route path="/Display" component={Display} exact />
     <Route path="/Display/:id" component={Update} exact />
     </Switch>
     

   )
}

export default App;

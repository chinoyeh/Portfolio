import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Writing from './Writing'
import Poetry from './Poetry'
import Contact from './Contact'


import Home from './Home'
import './App.css'
import Developing from './Developing';
const App = () => {
    return (
        <div >
         <Router>
    <Switch>
  <Route exact path='/'>
    <Home />
  </Route>
  <Route path='/writing'>
    <Writing />
  </Route>
  <Route path='/poetry'>
    <Poetry />
  </Route>
  <Route path='/developing'>
    <Developing />
  </Route>
  <Route path='/contact'>
    <Contact />
  </Route>
</Switch>
  </Router>
        </div>
    )
}

export default App

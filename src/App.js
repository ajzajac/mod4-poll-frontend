import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './MainContainer'
import NavBar from './NavBar'
import User from './User'
import { Router, Route, Switch } from 'react-router-dom';
import Login from './Login'
import Signup from './Signup'


class App extends React.Component {
  
  render(){
  return (
    <div className="App">
      {/* <NavBar /> 
        <Router>
          <Switch>
            <Route path="/login" render={(routerProps) => <Login  {...routerProps}/>} />
            <Route path="/signup" render={(routerProps) => <Signup  {...routerProps}/>} />
            <Route path="/" render={(routerProps) => <div><h1>Everybody Votes</h1></div>} />

            <Route path="/login" component={<Login />} />
            <Route path="/signup" component={<Signup />} />
            <Route path="/" render={<div><h1>Everybody Votes</h1></div>} />
          </Switch>
        </Router> */}

        <NavBar />
        
    </div>
  )}
  }

export default App;

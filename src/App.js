import React from 'react';
import logo from './logo.svg';
import './App.css';
import PollList from './PollList'
import NavBar from './NavBar'
import User from './User'
import { Router, Route, Switch } from 'react-router-dom';
import Login from './Login'
import Signup from './Signup'
import Title from './Title'
import CreatePoll from './CreatePoll'

const polls = `http://localhost:3000/polls`
const users = `http://localhost:3000/users`
const comments = `http://localhost:3000/comments`

class App extends React.Component {

  state = {
    allPolls: [],
    allUsers: [],
    currentUser: null,
  }

  componentDidMount(){
    fetch(polls)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          allPolls: [...data]
      })
    })

    fetch(users)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          allUsers: [...data]
      })
    })

  }

  setUser = (user) => {
    // event.preventDefault();
    this.setState({
      currentUser: user
    })
    console.log(this.state.currentUser)
  }
  
  render(){

  return (
    <div className="App">
        <NavBar user={this.state.currentUser} setUser={this.setUser} />
        <Title />
          <Switch>
            <Route exact path='/'/>
            <Route exact path='/newpoll' component={CreatePoll} />
            <Route exact path='/polls' render={(routerProps) => <PollList allPolls={this.state.allPolls} allUsers={this.state.allUsers} {...routerProps} /> } />
            <Route exact path='/signup' render={(routerProps) => <Signup setUser={this.setUser} {...routerProps} /> } />
            <Route exact path='/login' render={(routerProps) => <Login setUser={this.setUser} {...routerProps} /> } />
          </Switch>

          {/* <MainContainer allPolls={this.state.allPolls} allUsers={this.state.allUsers} /> */}
          
          {/* {console.log(this.state.allUsers)} */}
        
    </div>
  )}
  }

export default App;



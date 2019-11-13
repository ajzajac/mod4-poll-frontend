import React from 'react';
import logo from './logo.svg';
import './App.css';
import PollList from './PollList'
import NavBar from './NavBar'
import User from './User'
import { Router, Route, Switch } from 'react-router-dom';
import Login from './Login'
import Signup from './Signup'
import CreatePoll from './CreatePoll'
import Profile from './Profile'

const polls = `http://localhost:3000/polls`
const users = `http://localhost:3000/users`
const comments = `http://localhost:3000/comments`

class App extends React.Component {

  state = {
    allPolls: [],
    allUsers: [],
    currentUser: null
  }

  fetchAllPolls(){
    fetch(polls)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        allPolls: [...data]
      })
    })
  }

  fetchAllUsers(){
    fetch(users)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          allUsers: [...data]
      })
    })
  }

  componentDidMount(){
   
    this.fetchAllPolls()
    this.fetchAllUsers()
    
  }

// -------------------------------------------NEED THIS DO NOT DELETE----------------------------------------------- //

  // componentDidUpdate = (prevProps, prevState) => {
  //   // console.log('PREVOIUS', prevProps, prevState)
  //   // console.log("CURRENT", this.props, this.state)
  //   if(prevProps.location.pathname === '/newpoll' && this.props.location.pathname === '/polls'){
  //     this.fetchAllPolls()
  //   }
  //   else if(prevState.allPolls !== this.state.allPolls){
  //     this.fetchAllPolls()
  //   }
  // }
  //   // compare prevProps location path and this.props.location path and then do the fetch again 

// -------------------------------------------NEED THIS DO NOT DELETE----------------------------------------------- //

  setUser = (user) => {
    // event.preventDefault();
    this.setState({
      currentUser: user
    })
  }

  logOut = () => {
    this.props.history.push('/polls')
    this.setState({
      currentUser: null
    })
    setTimeout(() => alert('Sucessfully Logged Out'), 200)
  }
  
  render(){ 
    // console.log(this.state.currentUser)
  return (
    <div className="App">
        <NavBar user={this.state.currentUser} setUser={this.setUser} logOut={this.logOut} />
        {/* <Title /> */}
          <Switch>
            <Route exact path='/'/>
            <Route exact path='/newpoll' render={(routerProps) => <CreatePoll currentUser={this.state.currentUser} {...routerProps} /> } />
            <Route exact path='/polls' render={(routerProps) => <PollList allPolls={this.state.allPolls} allUsers={this.state.allUsers} currentUser={this.state.currentUser} {...routerProps} /> } />
            <Route exact path='/signup' render={(routerProps) => <Signup setUser={this.setUser} {...routerProps} /> } />
            <Route exact path='/login' render={(routerProps) => <Login setUser={this.setUser} {...routerProps} /> } />
            <Route exact path='/profile' render={(routerProps) => <Profile user={this.state.currentUser} allPolls={this.state.allPolls}  {...routerProps} /> } />
          </Switch>

          {/* <MainContainer allPolls={this.state.allPolls} allUsers={this.state.allUsers} /> */}
          
          {/* {console.log(this.state.allUsers)} */}
        
    </div>
  )}
  }

export default App;



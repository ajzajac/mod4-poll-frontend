import React from 'react';
import logo from './logo.svg';
import './App.css';
import PollList from './PollList'
import NavBar from './NavBar'
import User from './User'
import { Link, Route, Switch } from 'react-router-dom';
import Login from './Login'
import Signup from './Signup'
import CreatePoll from './CreatePoll'
import Profile from './Profile'
import Gambling from './Gambling'
import Footer from './Footer'

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

  autoLogin(){
    if (localStorage.token) {
      fetch(`http://localhost:3000/auto_login`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': localStorage.token
        },
      })
      .then(res => res.json())
      .then(response => {
        // console.log(response)
        this.setState({
          currentUser: response.user
        })
      })
    }
  }

  componentDidMount(){
    this.fetchAllPolls()
    this.fetchAllUsers()
    this.autoLogin()
    // if (localStorage.token) {
    //   fetch(`http://localhost:3000/auto_login`, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json',
    //       'Authorization': localStorage.token
    //     },
    //   })
    //   .then(res => res.json())
    //   .then(response => {
    //     // console.log(response)
    //     this.setState({
    //       currentUser: response.user
    //     })
    //   })
    // }
  }

  // dontBlowup = (prevProps, prevState) => {
  //   if(prevProps.location.pathname === '/newpoll' && this.props.location.pathname === '/polls'){
  //     return this.fetchAllPolls()
  //   }
  //   else if(prevState.allPolls !== this.state.allPolls){
  //     return this.fetchAllPolls()
  //   }
  // }

// -------------------------------------------NEED THIS DO NOT DELETE----------------------------------------------- //
  
  componentDidUpdate = (prevProps, prevState) => {
    // console.log('PREVOIUS', prevProps, prevState)
   
    if(prevProps.location.pathname === ('/newpoll' || '/profile') && this.props.location.pathname === '/polls'){
      this.fetchAllPolls()
      this.fetchAllUsers()
    }
    // else if(prevProps.location.pathname === '/profile' && this.props.location.pathname === '/polls'){
    //   this.fetchAllPolls()
    //   this.fetchAllUsers()
    // }
    // else if(prevState.allPolls !== this.state.allPolls){
    //   this.fetchAllPolls()
    // }
  }

    // compare prevProps location path and this.props.location path and then do the fetch again 

// -------------------------------------------NEED THIS DO NOT DELETE----------------------------------------------- //

  setUser = (user) => {
    // event.preventDefault();
    this.setState({
      currentUser: user
    })
  }

  logOut = () => {
    this.props.history.push('/login')
    this.setState({
      currentUser: null
    })
    setTimeout(() => alert('Sucessfully Logged Out'), 200)
    localStorage.clear()
  }
  
  render(){ 
    // console.log(this.state.currentUser)
  return (
      <div className="App">
  
        <NavBar user={this.state.currentUser} setUser={this.setUser} logOut={this.logOut} />
        <div className='contents'>
        
          <Switch>
            <Route exact path='/'/>
            <Route exact path='/newpoll' render={(routerProps) => <CreatePoll currentUser={this.state.currentUser} {...routerProps} /> } />
            <Route exact path='/polls' render={(routerProps) => <PollList allPolls={this.state.allPolls} allUsers={this.state.allUsers} currentUser={this.state.currentUser} {...routerProps} header='Polls' /> } />
            <Route exact path='/signup' render={(routerProps) => <Signup setUser={this.setUser} {...routerProps} /> } />
            <Route exact path='/login' render={(routerProps) => <Login setUser={this.setUser} {...routerProps} /> } />
            <Route exact path='/profile' render={(routerProps) => <Profile user={this.state.currentUser} allUsers={this.state.allUsers} allPolls={this.state.allPolls} header='My Created Polls' autoLogin={this.autoLogin} {...routerProps} /> } />
            {/* <Route exact path='/betting_table' 
              render={
                (routerProps) => 
                  <Gambling 
                    currentUser={this.state.currentUser} 
                    allUsers={this.state.allUsers} 
                    allPolls={this.state.allPolls} 
                    {...routerProps} 
                  /> 
              } 
            /> */}
          </Switch>
          
          {/* {this.state.currentUser? 
              <Link to='/betting_table' className='gamblingBtn'><button></button></Link>
              : null
          } */}

          {/* <MainContainer allPolls={this.state.allPolls} allUsers={this.state.allUsers} /> */}
          
          {/* {console.log(this.state.allUsers)} */}
          
          <Footer />
          </div>
        </div>
    
  )}
  }

export default App;



import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link, Router } from 'react-router-dom'
import Signup from './Signup';

function NavBar(props) {
    return (
      <div className="nav-bar">
          {/* <Router>
            <Link to="/signup"><Button color="default" ><div>Sign Up</div></Button></Link>
            <Link to="/profile">
                <Button color="default">
                <div><span aria-label="person" role="img">{props.user && props.user.username} 👤</span></div>
                </Button>
            </Link>
          </Router> */}
          
          <Link to='/signup' component={Signup}>Signup</Link>
          
          
      </div>
    );
  }
  
  export default NavBar;
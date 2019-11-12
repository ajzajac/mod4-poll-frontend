import React from 'react';
import Button from '@material-ui/core/Button';
import { Link, Router } from 'react-router-dom'
// import Signup from './Signup';

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

      
          <Button variant="contained" color="link" ><Link className="linkto" to='/polls' >Polls</Link></Button> &nbsp;&nbsp;&nbsp;
          <Button variant="contained" color="link" ><Link className="linkto" to='/newpoll' >Create Poll</Link></Button>&nbsp;&nbsp;&nbsp;
          <Button variant="contained" color="link" ><Link className="linkto" to='/signup' >Signup</Link></Button>&nbsp;&nbsp;&nbsp;
          <Button variant="contained" color="link" ><Link className="linkto" to='/login' >Login</Link></Button>
          

      </div>
    );
  }
  
  export default NavBar;
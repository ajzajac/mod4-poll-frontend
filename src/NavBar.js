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
          <Link to='/' className='logo' ><img src='http://r70.cooltext.com/rendered/cooltext341185200378755.png' height='50'></img></Link>
          
      
          <Link className="linkto" to='/polls' ><Button variant="contained" color="link" >Polls</Button></Link> &nbsp;&nbsp;&nbsp;
          <Link className="linkto" to='/newpoll' ><Button variant="contained" color="link" >Create Poll</Button></Link>&nbsp;&nbsp;&nbsp;

          {!props.user? 
            <>
              <Link className="linkto" to='/signup' ><Button variant="contained" color="link" >Signup</Button></Link>&nbsp;&nbsp;&nbsp;
              <Link className="linkto" to='/login' ><Button variant="contained" color="link" >Login</Button></Link>
            </>
            :
            <>
              <Link className="linkto" to='/profile' ><Button variant="contained" color="primary" >{props.user.username}</Button></Link>&nbsp;&nbsp;&nbsp;
              <Button variant="contained" color="link" onClick={props.logOut}>Logout</Button>
            </>
          }
          
          

      </div>
    );
  }
  
  export default NavBar;
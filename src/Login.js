import React from 'react';
import Footer from './Footer'

class Login extends React.Component{
  state = {
    username: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  

  handleSubmit = (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/login`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(response => {
      if (response.errors){
        alert(response.errors)
      } else {
        // we have the user object!!! store somewhere
        this.props.setUser(response.user)
        localStorage.token = response.token
        this.props.history.push('./polls')
      }
    })
    
}

render(){
    return (
        <div >
            <div className="input">
                <h1>User Log In</h1>
                <form className="auth-form" onSubmit={this.handleSubmit}>
                <input name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" className='input-field'  /> &nbsp;
                <button type="submit" className='input-field' >Login</button>
                </form>
            </div>
        </div>
    );
  }
}

export default Login;
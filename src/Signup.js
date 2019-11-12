import React, { Component } from 'react'

const users = `http://localhost:3000/users`

class Signup extends React.Component{
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
      if(this.state.password === this.state.passwordConfirmation){
        fetch(`http://localhost:3000/signup`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Accept': "application/json"
          },
          body: JSON.stringify({
            username: this.state.username,
            
          })
        })
          .then(res => res.json())
          .then(response => {
            if (response.errors){
              alert(response.errors)
            } else {
             
              this.props.setUser(response.user)
              localStorage.token = response.token
          
            }
          })
        
      } else {
        alert('You messed up. Try again. Get better at typing.')
      }
    }


render(){
    return (
      <div className="signup">
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <input name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;

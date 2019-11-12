import React from 'react';


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
        this.props.setUser(response.user)
        localStorage.token = response.token
       
      }
    )
}

render(){
    return (
        <div >
            <div className="input">
                <h2>Log In With Your Username</h2>
                <form className="auth-form" onSubmit={this.handleSubmit}>
                <input name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" /> &nbsp;
                <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
  }
}

export default Login;
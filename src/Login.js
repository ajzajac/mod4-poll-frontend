import React, { Component } from 'react'

export class Login extends Component {

    state = {
        name: "",
        money: 0
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.prevent.default();
        console.log(e.target)
        fetch(`http://localhost:3000/login`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(resp => resp.json())
            .then(response => {
                if(response.errors){
                    alert(response.errors)
                } else {
                    this.props.setUser(response.user)
                }
            })
    }

    render() {
        return (
            <div className='wrapper'>
                <div className='input' >
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder='Name' /><br></br>
                    <input type="submit" value="Login" />
                </form>
            </div>
            </div>
        )
    }
}

export default Login

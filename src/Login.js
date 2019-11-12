import React, { Component } from 'react'

const divStyle = {
    'border-width': 5,
    'border-style': 'solid',
    'width': '20%',
    'margin': 'auto',
    'margin-bottom': 10,
    'margin-top': 10,
    'padding':10
}

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
            <div>
                <div style={divStyle} >
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

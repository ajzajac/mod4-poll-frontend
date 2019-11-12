import React, { Component } from 'react'

const users = `http://localhost:3000/users`

const divStyle = {
    'border-width': 5,
    'border-style': 'solid',
    'width': '20%',
    'margin': 'auto',
    'margin-bottom': 10,
    'margin-top': 10,
    'padding':10
}

export class Signup extends Component {

    state = {
        name: "",
        money: 0
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(users, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                money: this.state.money
            })
        })
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    
    render() {
        return (
            <div style={divStyle} >
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder='Name' /><br></br>
                    <input type="submit" value="Sign up" />
                </form>
            </div>
        )
    }
}

export default Signup

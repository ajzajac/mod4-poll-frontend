import React, { Component } from 'react'

const users = `http://localhost:3000/users`

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
            <div className='wrapper'>
            <div className='input' >
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder='Name' /><br></br>
                    <input type="submit" value="Sign up" />
                </form>
            </div>
            </div>
        )
    }
}

export default Signup

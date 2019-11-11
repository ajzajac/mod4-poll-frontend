import React, { Component } from 'react';
import Poll from './Poll'


export class User extends Component {
    state = {
        name: "",
        money: 0
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Name:
                    <input type="text" value={this.state.value} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default User

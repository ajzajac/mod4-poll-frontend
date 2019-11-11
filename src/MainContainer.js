import React, { Component } from 'react';
import Poll from './Poll';
import User from './User'

const polls = `http://localhost:3000/polls`
const users = `http://localhost:3000/users`
const comments = `http://localhost:3000/comments`


export class MainContainer extends Component {
   
    componentDidMount(){
        fetch(users)
            .then(resp => resp.json())
            .then(data => console.log(data))
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default MainContainer

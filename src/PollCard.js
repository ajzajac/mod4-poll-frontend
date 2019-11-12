import React, { Component } from 'react';
// import Comment from './Comment'
import Button from '@material-ui/core/Button';

const comments = `http://localhost:3000/comments`
const messageStyle = {
    'border-width': 5,
    'border-style': 'solid',
    'width': '50%',
    'margin': 'auto',
    'margin-bottom': 5,
    'margin-top': 5,
    'padding':5
}

const commentsStyle = {
    'border-width': 5,
    'border-style': 'solid',
    'width': '50%',
    'margin': 'auto',
    'margin-bottom': 5,
    'margin-top': 5,
    'padding':5
}

export class PollCard extends Component {

    state = {
        allComments: []
    }

    componentDidMount(){
        fetch(comments)
        .then(resp => resp.json())
        .then(data =>
            this.setState({
                allComments: [...data]
            })
        )
    }

    render() {
        console.log(this.props.allUsers)
        return (
            <div>
               <h1 style={messageStyle}>{this.props.poll.message}</h1><br></br>
               {this.state.allComments.filter(comment => comment.poll_id === this.props.poll.id).map(comment => 
                    <div style={commentsStyle}>
                        <p>{comment.content}</p>
                        <p>-{this.props.allUsers.find(user => user.id === comment.user_id).name}</p>
                    </div>
                )}
                <Button variant="contained" color="link" onClick={this.props.clearPollClick} >Back</Button>
            </div>
        )
    }
}

export default PollCard
import React, { Component } from 'react';
// import Comment from './Comment'
import Button from '@material-ui/core/Button';
import CreateComment from './CreateComment';


const comments = `http://localhost:3000/comments`

export class PollCard extends Component {

    state = {
        allComments: [],
        commentInput: ''
    }

    // handleCommentSubmit = (event) => {
    //     event.preventDefault();
    //     fetch(comments, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             content: this.state.commentInput,
    //             // user_id: this.props.currentUser.id,
    //             user_id: 1, 
    //             poll_id: this.props.currentPoll.id,
    //         })
    //     })
        
    //     this.setState(prevState => ({
    //         allComments: [...prevState.allComments, this.state.commentInput],
    //         commentInput: ''
    //     }))
    // }

    // handleNewCommentChange = (event) => {
    //     this.setState({
    //         commentInput: event.target.value
    //     })
    // }

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
        // console.log(this.props.allUsers)
        return (
            <div>
               <h1 className='polls'>{this.props.poll.message}</h1><br></br>
               {this.state.allComments.filter(comment => comment.poll_id === this.props.poll.id).map(comment => 
                    <div className='comment'>
                        <p>{comment.content}</p>
                        <p>-{this.props.allUsers.find(user => user.id === comment.user_id).name}</p>
                    </div>
                )}
                <CreateComment currentPoll={this.props.currentPoll} commentInput={this.state.commentInput} handleCommentSubmit={this.handleCommentSubmit} handleNewCommentChange={this.handleNewCommentChange} />
                <Button variant="contained" color="link" onClick={this.props.clearPollClick} >Back</Button>
            </div>
        )
    }
}

export default PollCard
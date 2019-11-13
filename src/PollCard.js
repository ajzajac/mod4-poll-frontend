import React, { Component } from 'react';
// import Comment from './Comment'
import Button from '@material-ui/core/Button';
import CreateComment from './CreateComment';
// import StackedBarChart from './StackedBarChart'

const comments = `http://localhost:3000/comments`

export class PollCard extends Component {

    state = {
        allComments: [],
        commentInput: ''
    }

    handleCommentSubmit = (event) => {
        event.preventDefault();
        fetch(comments, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                content: this.state.commentInput,
                user_id: this.props.currentUser.id,
                poll_id: this.props.currentPoll.id,
            })
        })
        .then(
            this.setState(prevState => ({
                allComments: [...prevState.allComments, this.state.commentInput],
            }))
        )
        
    }

    handleNewCommentChange = (event) => {
        this.setState({
            commentInput: event.target.value
        })
    }

    fetchAllComments(){
        fetch(comments)
        .then(resp => resp.json())
        .then(data =>
            this.setState({
                allComments: [...data]
            })
        )
    }

    // addComment = () => {
    //     fetch(comments, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify({

    //         })
    //     })
    // }

    componentDidMount(){
        this.fetchAllComments()
    }

    // //----------------------------NEED THIS DO NOT DELETE----------------------------------------------------------------------------
        componentDidUpdate = (prevState) => {
         if(prevState.allComments !== this.state.allComments){
            this.fetchAllComments()
            }
        }

    // //--------------------------------------------------------------------------------------------------------

    render() { 
        // console.log(this.props.allUsers)
        // console.log(this.props)
        // console.log(this.props.allComments)
        return (
                <div>
                    <h1 className='pollsTitle'>{this.props.poll.message}<br></br>
                        <button className='voteBtns' name='yay' onClick={this.props.handleVote}>Yay</button> {this.props.poll.yay} - {this.props.poll.nay} <button className='voteBtns' name='nay' onClick={this.props.handleVote}>Nay</button>
                        
                    </h1><br></br>

                {this.state.allComments.filter(comment => comment.poll_id === this.props.poll.id).map(comment => 
                    <div className='comment'>
                        <div className='commentUser' >
                            <img src='http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png' height='40' width='40' /><br></br>
                            <label>{this.props.allUsers.find(user => user.id === comment.user_id).username}</label>

                            {/* <StackedBarChart />  */}

                        </div>
                        <div className='commentContent' >
                            <label>{comment.content}</label>
                        </div>
                    </div>
                    )}
                    <CreateComment currentPoll={this.props.currentPoll} currentUser={this.props.currentUser} handleCommentSubmit={this.handleCommentSubmit} handleNewCommentChange={this.handleNewCommentChange} />

                    <Button variant="contained" color="link" onClick={this.props.clearPollClick} >Back</Button>
                </div>
        )
    }
}

export default PollCard
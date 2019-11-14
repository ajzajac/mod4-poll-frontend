import React, { Component } from 'react';
// import Comment from './Comment'
import Button from '@material-ui/core/Button';
import CreateComment from './CreateComment';
import Chart from './Chart'
import Footer from './Footer'

const comments = `http://localhost:3000/comments`

export class PollCard extends Component {

    state = {
        allComments: [],
        commentInput: ''
    }

    logInToComment = () => {
        this.props.history.push('./login')
        alert('please log in')
    }

    handleCommentSubmit = (event) => {
        event.preventDefault();

        !this.props.currentUser ? 
            // this.props.history.push('./login')
            this.logInToComment()
            :
            
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
                this.setState({
                    commentInput: ''
                })
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

    dateCompare = () =>{
        return Date.parse(this.props.poll.expiration) <= Date.parse(new Date()) ? true:false
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
        componentDidUpdate = (nextState) => {
         if(this.shouldComponentUpdate(nextState)){
            this.fetchAllComments()
            }
        }

        shouldComponentUpdate(nextState){
            return nextState.allComments !== this.state.allComments
        }

    // //--------------------------------------------------------------------------------------------------------

    voteWinner = () => {
        
    }

    render() { 
        return (
            <>
                {this.dateCompare() ? 
                    <div>
                        <div className='pollsTitle'>
                            <label style={{'font-size':60}}>{this.props.poll.message}</label><br></br>

                            <label>
                                <span style={{'font-weight':'bold'}}>{this.props.poll.option1} </span>
                                <span className={this.props.poll.yay >= this.props.poll.nay ? 'winnerVote' : 'loserVote'} >{this.props.poll.yay}</span> 
                                -
                                <span className={this.props.poll.nay >= this.props.poll.yay ? 'winnerVote' : 'loserVote'} >{this.props.poll.nay} </span>

                                <span style={{'font-weight':'bold'}}>{this.props.poll.option2}</span>
                                
                                <br></br>
                                Poll closed
                            </label>
                        </div><br></br>

                        <Chart option1={this.props.poll.option1} option2={this.props.poll.option2} yay={this.props.poll.yay} nay={this.props.poll.nay} />

                        {this.state.allComments.filter(comment => comment.poll_id === this.props.poll.id).map(comment => 
                            <div className='comment'>
                                <div className='commentUser' >
                                    <img src='http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png' height='40' width='40' /><br></br>
                                    <label>{this.props.allUsers.find(user => user.id === comment.user_id).username}</label> 
                                </div>
                                <div className='commentContent' >
                                    <label>{comment.content}</label>
                                </div>
                            </div>
                        )}

                        <Button variant="contained" color="link" onClick={this.props.clearPollClick} >Back</Button>
                    </div>

                    :
                    
                    <div>
                        <div className='pollsTitle'>
                            <label style={{'font-size':60}}>{this.props.poll.message}</label><br></br>
                            <label ><button className='voteBtns' name='yay' onClick={this.props.handleVote}>{this.props.poll.option1}</button> {this.props.poll.yay} - {this.props.poll.nay} <button className='voteBtns' name='nay' onClick={this.props.handleVote}>{this.props.poll.option2}</button><br></br>
                            Poll closes: {this.props.poll.expiration.split('T')[0] + ' ' + this.props.poll.expiration.split('T')[1].slice(0,5)}</label>
                        </div><br></br>

                        <Chart option1={this.props.poll.option1} option2={this.props.poll.option2} yay={this.props.poll.yay} nay={this.props.poll.nay} />

                    {this.state.allComments !== [] ?
                        this.state.allComments.filter(comment => comment.poll_id === this.props.poll.id).map(comment => 
                            <div className='comment'>
                                <div className='commentUser' >
                                    <img src='http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png' height='40' width='40' /><br></br>
                                    <label>{this.props.allUsers.find(user => user.id === comment.user_id).username}</label> 
                                </div>
                                <div className='commentContent' >
                                    <label>{comment.content}</label>
                                </div>
                            </div>
                        )
                    :
                    null
                    }
                        <CreateComment currentPoll={this.props.currentPoll} currentUser={this.props.currentUser} allUsers={this.props.allUsers} allComments={this.state.allComments} commentInput={this.state.commentInput} handleCommentSubmit={this.handleCommentSubmit} handleNewCommentChange={this.handleNewCommentChange} />

                        <Button variant="contained" color="link" onClick={this.props.clearPollClick} >Back</Button>
                    </div>
                }
            </>
        )
    }
}

export default PollCard
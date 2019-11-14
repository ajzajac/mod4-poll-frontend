import React, { Component } from 'react';
import Poll from './Poll';
import User from './User'
import PollCard from './PollCard';
import Footer from './Footer'

const polls = `http://localhost:3000/polls`

export class PollList extends Component {
   
    state = {
        currentPoll: null,
    }

    handlePollClick = (poll) => {
        this.setState({
            currentPoll: poll
        })
    }

    clearPollClick = () => {
        this.setState({
            currentPoll: null
        })
    }

    renderPolls = () => {
        //  if(!this.state.currentPoll=== {}){
        //     return this.props.allPolls.map(poll =>
        //         <Poll handlePollClick={this.handlePollClick} poll={poll} />   
        //             )
        //     } else {
        //         return(
        //             <PollCard clearPollClick={this.clearPollClick} poll={this.state.currentPoll} />
        //         )
        //     }

        // return this.state.currentPoll? 
        //     <PollCard clearPollClick={this.clearPollClick} poll={this.state.currentPoll} /> 
        //     :
        //     this.props.allPolls.map(poll =>
        //         <Poll handlePollClick={this.handlePollClick} poll={poll} />   
        //     )

        // if(!this.state.currentPoll){
        //     return(
        //         <div>
        //             {this.props.allPolls.map(poll =>
        //                 <Poll poll={poll} />)}
        //         </div>
        //     )
        // } else {
        //     return (
        //         <PollCard poll={this.state.currentPoll} />
        //     )
        // }
        if(this.state.currentPoll){
            // console.log(this.props.allUsers)
            return (
                <PollCard allUsers={this.props.allUsers} poll={this.state.currentPoll} clearPollClick={this.clearPollClick} currentPoll={this.state.currentPoll} currentUser={this.props.currentUser} handleVote={this.handleVote} allComments={this.props.allComments} handleNewCommentChange={this.props.handleNewCommentChange} commentInput={this.props.commentInput} />
            )
        } else{
            return(
                <div>
                    {this.props.allPolls.map(poll =>
                        <h6><Poll poll={poll} handlePollClick={this.handlePollClick} /></h6>)}
                </div>
            )
        }
    }

    handleVote = (event) => {
        event.preventDefault();
        this.setState({
            currentPoll: {
                ...this.state.currentPoll,
                [event.target.name]: this.state.currentPoll[event.target.name] + 1
            }
        }, () => this.patchPollVotes())

    }

    patchPollVotes = () => {
        fetch(polls + `/${this.state.currentPoll.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                // [event.target.name]: this.state.currentPoll[event.target.name]
                yay: this.state.currentPoll.yay,
                nay: this.state.currentPoll.nay
            })
        })
    }

    render() {
        // console.log(this.state.currentPoll)
        return (
            <div className='pages' >
                <h1 className='pollHeader' hidden={this.state.currentPoll? true: false} >Polls</h1>
                {this.renderPolls()}
                {/* {this.props.allPolls.map(poll =>{
                return <Poll handlePollClick={this.handlePollClick} poll={poll} />})}    */}
            </div>
        )
    }
}

export default PollList

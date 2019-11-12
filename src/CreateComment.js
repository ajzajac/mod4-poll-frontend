import React, { Component } from 'react'

const comments = `http://localhost:3000/comments`

export default class CreateComment extends Component{

    // state = {
    //     commentInput: ''
    // }

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

    //     this.setState({
    //         commentInput: ''
    //     })
    // }

    // handleNewCommentChange = (event) => {
    //     this.setState({
    //         commentInput: event.target.value
    //     })
    // }

    render(){
        // console.log(this.state.commentInput)
        // console.log(this.props.currentPoll)
        return(
            <div className='input' >
                <form onSubmit={this.props.handleCommentSubmit}>
                    <input type="text" value={this.props.commentInput} onChange={this.props.handleNewCommentChange} placeholder='Leave a comment...' /><br></br>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }


}
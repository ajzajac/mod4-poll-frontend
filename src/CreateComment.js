import React, { Component } from 'react'

export default class CreateComment extends Component{

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
    //             user_id: this.props.currentUser.id,
    //             poll_id: this.props.currentPoll.id,
    //         })
    //     })

    // }

    // handleNewCommentChange = (event) => {
    //     this.setState({
    //         commentInput: event.target.value
    //     })
    // }

    // componentDidUpdate = (prevProps, prevState) => {
    //     console.log('this', this.props)
    //     console.log('prev', prevProps)
    //   }

    render(){
        // console.log(this.state.commentInput)
        // console.log(this.props.currentPoll)
        console.log(this.props.allUsers)
        console.log(this.props.allComments)
        return(
            <div className='input'>
                <h3>Leave a Comment</h3>
                <form onSubmit={this.props.handleCommentSubmit}>
                    {/* <input type="text" value={this.props.commentInput} onChange={this.props.handleNewCommentChange} 
                    placeholder='Leave a comment...' /><br></br> */}
                    <textarea cols="40" rows="3" value={this.props.commentInput} onChange={this.props.handleNewCommentChange} 
                    placeholder='Leave a comment...' className='input-field' > </textarea><br></br>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }


}
import React, { Component } from 'react'

const polls = `http://localhost:3000/polls`
const votes = `http://localhost:3000/votes`

export default class CreatePoll extends Component{

    state = {
        message: '',
        option1: '',
        option2: '',
        option3: ''
    }

    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    addOption = () => {
        this.setState(prevState => ({
            options: [...prevState.options, '']
        }))
    }

    handlePollSubmit = (event) => {
        event.preventDefault();
        fetch(polls, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body:JSON.stringify({
                message: this.state.messsage,
                user_id: 1
            })
        })

        fetch(votes, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body:JSON.stringify({
                option: this.state.option1,
                // poll_id: this.props.currentPoll.id,
                user_id: 1
            })
        })

        fetch(votes, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body:JSON.stringify({
                option: this.state.option2,
                // poll_id: this.props.currentPoll.id,
                user_id: 1
            })
        })

        fetch(votes, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body:JSON.stringify({
                option: this.state.option3,
                // poll_id: this.props.currentPoll.id,
                user_id: 1
            })
        })

    }

    handleOptionChange = (event) => {
        // let optionUpdate = this.state.options[event.target.id]
        // optionUpdate = event.target.value
        // this.setState({optionUpdate})
        // console.log(this.state.options)

        this.setState({
            [event.target.name]: [event.target.value]
        })

        // this.setState({
        //     options: {
        //         [event.target.id]: [event.target.value]
        //     }
        // })
        // console.log(event.target.id)
    }

    render(){
        return(
            <div>
                 <form onSubmit={this.handlePollSubmit}>
                    <input type="text" value={this.state.message} onChange={this.handleMessageChange} placeholder='Poll message' /><br></br>
                    <input type="text" placeholder='Option' onChange={this.handleOptionChange} name='option1' value={this.state.option1} /><br></br> 
                    <input type="text" placeholder='Option' onChange={this.handleOptionChange} name='option2' value={this.state.option2} /><br></br> 
                    <input type="text" placeholder='Option' onChange={this.handleOptionChange} name='option3' value={this.state.option3} /><br></br> 
                    <input type='button' value='Add option' onClick={this.addOption}></input>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}
import React, { Component } from 'react'

const polls = `http://localhost:3000/polls`
const votes = `http://localhost:3000/votes`

export default class CreatePoll extends Component{

    state = {
        message: '',
        option1: '',
        option2: '',
        
        // options: {}
    }

    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    // addOption = () => {
    //     this.setState(prevState => ({
    //         options: [...prevState.options, '']
    //     }))
    // }

    handlePollSubmit = (event) => {
        event.preventDefault();

        fetch(polls, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body:JSON.stringify({
                message: this.state.message,
                user_id: this.props.currentUser.id,
                yay: 0,
                nay: 0,
                expiration: new Date(document.getElementById('expiration').value),
                option1: this.state.option1,
                option2: this.state.option2
            })
        })
        // .then(resp => resp.json())
        .then(() => {
            this.setState({message: ''})
            this.props.history.push('/polls')
        })

    }

    handleOptionChange = (event) => {
        // let optionUpdate = this.state.options[event.target.id]
        // optionUpdate = event.target.value
        // this.setState({optionUpdate})
        // console.log(this.state.options)

        // this.setState({
        //     [event.target.name]: event.target.value
        // })

        this.setState({
            [event.target.name]: event.target.value
        })

    }

    render(){
        console.log(this.state.options)
        return(
            <div className='input' style={{"height": 280}}>
                 <h1>New Poll Question</h1>
                 <form onSubmit={this.handlePollSubmit}>
                    {/* <input type="text" value={this.state.message} onChange={this.handleMessageChange} placeholder='Poll message' /><br></br> */}
                    <textarea cols="35" rows="7" value={this.state.message} onChange={this.handleMessageChange} placeholder='Poll Question' className='input-field' ></textarea><br></br>
                    <label>Expiration: </label><input id='expiration' name='expiration' type='datetime-local' ></input><br></br>
                    <input type="text" placeholder='Option' onChange={this.handleOptionChange} name='option1' value={this.state.option1} /><br></br> 
                    <input type="text" placeholder='Option' onChange={this.handleOptionChange} name='option2' value={this.state.option2} /><br></br> 
                    {/* <input type="text" placeholder='Option' onChange={this.handleOptionChange} name='option3' value={this.state.option3} /><br></br> 
                    <input type='button' value='Add option' onClick={this.addOption}></input> */}
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }

}
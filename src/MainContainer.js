import React, { Component } from 'react';
import Poll from './Poll';
import User from './User'
import PollCard from './PollCard';

export class MainContainer extends Component {
   
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
                <PollCard allUsers={this.props.allUsers} poll={this.state.currentPoll} clearPollClick={this.clearPollClick} />
            )
        } else{
            return(
                <div>
                    {this.props.allPolls.map(poll =>
                        <Poll poll={poll} handlePollClick={this.handlePollClick} />)}
                </div>
            )
        }
    }

    render() {
        return (
            <div>
               {this.renderPolls()}
               {/* {this.props.allPolls.map(poll =>{
               return <Poll handlePollClick={this.handlePollClick} poll={poll} />})}    */}
            </div>
        )
    }
}

export default MainContainer

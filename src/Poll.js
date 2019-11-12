import React, { Component } from 'react';
import Comment from './Comment'

export class Poll extends Component {
    render() {
        return (
            <div onClick={() => this.props.handlePollClick(this.props.poll)} className='polls' >
                {/* <div  > */}
                    <h1>{this.props.poll.message}</h1>
                {/* </div> */}
            </div>
        )
    }
}

export default Poll

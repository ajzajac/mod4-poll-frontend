import React, { Component } from 'react';
import Comment from './Comment'

const divStyle = {
    'border-width': 5,
    'border-style': 'solid',
    'width': '50%',
    'margin': 'auto',
    'margin-bottom': 5,
    'margin-top': 5
}

export class Poll extends Component {
    render() {
        return (
            <div onClick={() => this.props.handlePollClick(this.props.poll)} style={divStyle}>
                {/* <div  > */}
                    <h1>{this.props.poll.message}</h1>
                {/* </div> */}
            </div>
        )
    }
}

export default Poll

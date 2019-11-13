import React, { Component } from 'react';
import Comment from './Comment'

export class Poll extends Component {

    dateCompare = () =>{
        return Date.parse(this.props.poll.expiration) <= Date.parse(new Date()) ? true:false
    }    

    render() {
        // console.log(this.props.poll)
        return (
            <div onClick={() => this.props.handlePollClick(this.props.poll)} className='polls' >
                {/* <div  > */}
                    <h1>{this.props.poll.message}</h1>
                    <h3 className='status' >{this.dateCompare() ? 'CLOSED' : 'OPEN'}</h3>
                {/* </div> */}
            </div>
        )
    }
}
 
export default Poll

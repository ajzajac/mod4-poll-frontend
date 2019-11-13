import React from 'react';
import Poll from './Poll';

export default class Profile extends React.Component{    
    render(){
        return(
            <div className='profile'>
                {/* <h1 className='commentUser' style={{'margin':'auto', 'margin-top':10}}>{props.user.username}</h1> */}
                <h1 className='pollHeader' style={{'margin-top': 10, 'font-variant': 'small-caps', 'width':'45%'}}>{this.props.user.username}'s Profile</h1>
                <h2 className='pollHeader' style={{'margin-top':10,'margin-bottom':10, 'width':'20%'}}>Created Polls</h2>
                {this.props.allPolls.filter(poll => poll.user_id === this.props.user.id).map(poll => 
                    <h4 className='profilePolls' style={{'padding':3}}>{poll.message}<br></br>Yay {poll.yay} - {poll.nay} Nay</h4>
                    // currently only shows polls that were created by the user
                )}    
            </div>
        )
    }
}
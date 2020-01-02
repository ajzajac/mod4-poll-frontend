import React, { Component } from 'react';
import Poll from './Poll'

export default class Gambling extends Component {

    render(){
        return(
            <div>
                <h1 className='bettingHeader'>Betting Table</h1>
                <div>
                    {this.props.allPolls.filter(poll =>  Date.parse(poll.expiration) > Date.parse(new Date())).map(poll => 
                        <div className='gamblingPolls' >
                            <div className='gamblingMessageLine' >
                                <label className='gamblingMessage'>{poll.message}</label>
                            </div>
                            <div className='gamblingBtnsDiv'>
                            <button className='gamblingBtns'>{poll.option1}</button><button className='gamblingBtns'>{poll.option2}</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
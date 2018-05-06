import React, { Component } from 'react';

class Add extends Component {
    constructor (props) {
        super(props);
        this.state = {
            text:''
        }
    }
    handleInput (event) {
        this.setState( { text: event.target.value } );
    }
    handleEnter (event) {
        if (event.keyCode === 13 && event.target.value !== '') {
            this.props.onAdd(this.state.text);
            this.setState( { text:'' } );
        }
    }
    render () {
        return (
            <div className='list-add'>
                <input 
                    type='text' 
                    onChange={ this.handleInput.bind(this) } 
                    onKeyDown={ this.handleEnter.bind(this) }
                    value={ this.state.text }
                    placeholder='please input an event to do...'/>
            </div>
        );
    }
}

export default Add;
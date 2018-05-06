import React, { Component } from 'react';

class List extends Component {
    handleDel () {
        this.props.onDel(this.props.index);
    }
    handleComplete () {
        this.props.onComplete(this.props.index);
    }
    render () {
        let completeClass = '';
        if (this.props.complete) {
            completeClass = 'complete';
        }
        return (
            <div className={`list-item ${completeClass}`} >
                <div>
                    <input
                        type='checkbox' 
                        onChange={ this.handleComplete.bind(this) } 
                        checked={ this.props.complete }/>
                </div>
                <div><p>{ this.props.text }</p></div>
                <div><button onClick={ this.handleDel.bind(this) }>del</button></div>
            </div>
        );
    }
}

export default List;
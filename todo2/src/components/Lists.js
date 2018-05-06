import React, { Component } from 'react';
import List from './List';

class Lists extends Component {
    handleDelIndex (index) {
        this.props.onDelTop(index);
    }
    handleComIndex (index) {
        this.props.onComTop(index);
    }
    render () {
        let all = true;
        let mode = true;
        if (this.props.view === 'Active'){
            all = false;
            mode = false;
        } else if (this.props.view === 'Completed'){
            all = false;
            mode = true; 
        }
        return (
            <div className='lists'>
                { this.props.lists.map( (item, index) => {
                    if (all || !(item.complete ^ mode)) {
                        return (
                            <List
                                key={index}
                                index={index}
                                id={item.id}
                                text={item.text}
                                complete={item.complete}
                                onDel={ this.handleDelIndex.bind(this) }
                                onComplete={ this.handleComIndex.bind(this) } />
                        )
                    }
                } )}
            </div>
        );
    }
}

export default Lists;
import React from 'react';
import FilterMenu from '../containers/FilterMenu';
import { Switches } from '../actions';

const Options = () => {
    return (
        <div className='options'>
          <button>Complete All</button>
          <button>Clear All</button>
        </div>
    )
}

export default Options;
import React from 'react';
import FilterMenu from '../containers/FilterMenu';
import { Switches } from '../actions';

const VisibilityMenu = () => {
    return (
        <div className='menu'>
          <FilterMenu text='All' filterStatu={ Switches.SHOW_ALL }/>
          <FilterMenu text='Active' filterStatu={ Switches.SHOW_ACTIVE }/>
          <FilterMenu text='Completed' filterStatu={ Switches.SHOW_COMPLETED }/>
        </div>
    )
}

export default VisibilityMenu;
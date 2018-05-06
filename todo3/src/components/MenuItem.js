import React from 'react';

const MenuItem = ({text, active, toggleFilter}) => {
    return (
        <button className={`${active?'active':''}`} onClick={ () => toggleFilter() }>{ text }</button>
    )
}

export default MenuItem;
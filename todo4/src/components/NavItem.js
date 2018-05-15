import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({text, filter}) => {
    return (
        <li>
            <NavLink to={`/${filter}`} >{ text }</NavLink>
        </li>
    )
}

export default NavItem
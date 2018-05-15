import react from 'react'
import NavItem from './NavItem'

const Header = () => {
    return (
        <div className='Header'>
            <h1>Todo</h1>
            <ul className='filter-nav'>
                <NavItem text='All' filter='all' />
                <NavItem text='Active' filter='active' />
                <NavItem text='Completed' filter='completed' />
            </ul>
        </div>
    )
}

export default Header
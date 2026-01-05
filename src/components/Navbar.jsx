import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Courses from '../pages/Courses'
import Profile from '../pages/Profile'

const Navbar = () => {
    return (
        <div className='nav'>
            <h3>Kareem</h3>
            <div className="links">
                <NavLink
                    className={({ isActive }) => (isActive ? 'red' : 'link')}
                    to={'/'}
                    element={<Home />}
                >
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? 'red' : 'link')}
                    to={'/about'}
                    element={<About />}
                >
                    About
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? 'red' : 'link')}
                    to={'/courses'}
                    element={<Courses />}
                >
                    Courses
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? 'red' : 'link')}
                    to={'/profile'}
                    element={<Profile />}
                >
                    Profile
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar

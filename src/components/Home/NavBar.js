import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div>
        <nav className="navbar navbar-expand-lg bg-dark md:flex md:justify-end">
            <NavLink className="flex">Home</NavLink>
            <NavLink>Search</NavLink>
            <NavLink>Messages</NavLink>
            <NavLink>Notifications</NavLink>
            <NavLink>Profile</NavLink>
            <NavLink>Logout</NavLink>
        </nav>
    </div>
    </>
  )
}

export default NavBar

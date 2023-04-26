import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
        <Link to='/'>Main</Link>
        <Link to='/about'>About</Link>
        <Link to='/contacts'>Contacts</Link>
        <Link to='/courses'>Courses</Link>
    </nav>
  )
}

export default Menu
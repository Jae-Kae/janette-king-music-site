import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import navData from './navData'
import '../styles/hamburgerNav.css'

const HamburgerNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='hamburger-navbar'>
      <button className='hamburger' onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul className='hamburger-nav-list'>
          {navData.map((item) => (
            <li
              key={item.path}
              className={`nav-item ${
                location.pathname === item.path ? 'active' : ''
              }`}
            >
              <Link to={item.path} className='nav-link'>
                {/* {item.icon} */}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default HamburgerNav

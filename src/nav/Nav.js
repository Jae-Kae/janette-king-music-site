import React from 'react'
import '../styles/nav.css'
import { Link, useLocation } from 'react-router-dom'
import navData from './navData'
import SocialMediaBar from '../components/socials/SocialMediaBar'

const Nav = () => {
  const location = useLocation()

  return (
    <nav className='navbar'>
      <ul className='nav-list'>
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
      <SocialMediaBar />
    </nav>
  )
}

export default Nav

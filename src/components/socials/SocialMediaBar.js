import React from 'react'
import { Link } from 'react-router-dom'
import socialMediaLinksData from '../socialMediaLinksData'
import '../../styles/social-media-bar.css'

const SocialMediaBar = () => {
  return (
    <div className='bar-container'>
      {socialMediaLinksData.map((social, index) => (
        <Link
          key={index}
          to={social.url}
          target='_blank'
          rel='noopener noreferrer'
        >
          {social.icon}
        </Link>
      ))}
    </div>
  )
}

export default SocialMediaBar

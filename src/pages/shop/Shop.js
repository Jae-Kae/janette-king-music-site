import { Link } from 'react-router-dom'

import { FaPlayCircle } from 'react-icons/fa'
import merch from './shopData'
import '../../styles/shop.css'

const Shop = () => {
  return (
    <div className='shop-container'>
      {/* Hero Section */}
      <div className='hero-section'>
        <h1>Shop</h1>
      </div>

      {/* Albums Grid */}
      <div className='albums-grid'>
        {merch.map((album, index) => (
          <Link to={album.link} key={index} className='album-card'>
            <img src={album.image} alt={album.title} className='album-image' />
            <div className='album-info'>
              <h2>{album.title}</h2>
              <a
                href={album.link}
                target='_blank'
                rel='noopener noreferrer'
                className='play-button'
              >
                <FaPlayCircle size={24} />
              </a>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Shop

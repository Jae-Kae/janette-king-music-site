import React, { useState } from 'react'
import { FaPlay, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import videos from './videosData'
import '../../styles/musicVideosGrid.css'

const MusicVideoGrid = () => {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <div className='container'>
      {/* <h1 className='title'>Music Videos</h1> */}
      <div className='grid'>
        {videos.map((video, index) => (
          <div key={index} className='card'>
            <img
              src={video.thumbnail}
              alt={video.title}
              className='thumbnail'
            />
            <div className='overlay'>
              <h2 className='video-title'>{video.title}</h2>
              <div className='buttons'>
                <button
                  className='btn play'
                  onClick={() => setActiveVideo(video.url)}
                >
                  <FaPlay /> Play
                </button>
                <a
                  href={video.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn external'
                >
                  <FaExternalLinkAlt /> Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {activeVideo && (
        <div className='modal'>
          <div className='modal-content'>
            <button className='close' onClick={() => setActiveVideo(null)}>
              <FaTimes />
            </button>
            <iframe
              width='560'
              height='315'
              src={`${activeVideo}?autoplay=1`}
              title='YouTube Video Player'
              allow='autoplay; encrypted-media'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  )
}

export default MusicVideoGrid

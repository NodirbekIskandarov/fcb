import React from 'react'
import './footer.scss'
function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='logo_part'>

        </div>
        <div className='socials'>
          <a href='/' target='_blank' className='social'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png' alt='instagram'/>
            <span>INSTAGRAM</span>
          </a>
          <a href='/' target='_blank' className='social'>
            <img src='https://freelogopng.com/images/all_img/1683044996telegram-logo-png.png' alt='instagram'/>
            <span>TELEGRAM</span>
          </a>
          <a href='/' target='_blank' className='social'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png' alt='instagram'/>
            <span>YOU TUBE</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
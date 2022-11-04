import React from 'react'

// imgs
import ingressImg from '../imgs/ingress.webp'
import zuriLogo from '../imgs/zuri-logo.png'

function Footer() {
  return (
    <footer className='footer'>
        <img className='footer-logo' src={zuriLogo} />
        <h5>HNG Internship 9 Frontend Task</h5>
        <img className='footer-logo' src={ingressImg} />
    </footer>
  )
}

export default Footer
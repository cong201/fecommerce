import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import printester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo} alt="" />
        <p>E-SHOP</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social__icon">
        <div className="footer-icons__container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons__container">
            <img src={printester_icon} alt="" />
        </div>
        <div className="footer-icons__container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className='footer-copyright'>
        <hr/>
        <p>Copyright @ 2023 - Congle</p>
      </div>
    </div>
  )
}

export default Footer

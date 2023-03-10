import React from 'react'
import {BsInstagram, BsTwitter, BsFacebook, BsLinkedin } from 'react-icons/bs';
import '../styles/Footer.css'

function Footer(){
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <BsInstagram /> <BsTwitter /> <BsFacebook /> <BsLinkedin />
        </div>
        <p>&copy; 2023 pizzaplace.com</p>
        <p>555-555-5555</p>
    </div>
  )
}

export default Footer
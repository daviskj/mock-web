import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizzas})`}}></div>

        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor ipsum, rutrum nec bibendum sit amet, scelerisque quis purus. Sed vitae nulla nisi. Aenean interdum, nisi scelerisque vestibulum blandit, justo tellus finibus purus, eu egestas urna nunc ac felis. Nullam ultricies sollicitudin vestibulum. Etiam et sollicitudin metus. Ut tincidunt libero eros, eu auctor neque mattis vitae. Donec non sollicitudin dolor, eget facilisis ipsum. Nulla fermentum metus eu nunc tempor fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam aliquam tempor dui. Ut euismod eros sed nisl rutrum, molestie vestibulum lorem aliquam.</p>
        </div>
    </div>
  )
}

export default About
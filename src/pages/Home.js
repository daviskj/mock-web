import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/pizza.jpeg'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
    <div className='headerContainer'>
        <h1>Pizza Place</h1>
        <p>who wants pizza</p>
        <Link to='/menu'>
        <button>order now</button>
        </Link>
    </div>
    </div>
  )
}

export default Home
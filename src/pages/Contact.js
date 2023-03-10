import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{ backgroundImage: `url(${PizzaLeft})`}}>
        </div>

        <div className='rightSide' >
            <h1>Contact Us</h1>
            <form id='contact-form' mehtod='POST'>
                <label htmlFor='name'>Full Name</label>
                <input name='name' placeholder='enter full name..' type='text' />
                <label htmlFor='email'>e-mail</label>
                <input name='name' placeholder='enter e-mail..' type='email' />
                <label htmlFor='message'>Message</label>
                <textarea 
                    rows='6' 
                    placeholder='enter message..' 
                    name='message' 
                    required> </textarea>
            <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
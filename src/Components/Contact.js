import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
    return (
        <div className ="contact">
            <Navbar/>
            <div className = 'contact-card'>
                <form className ='contact-form'>
                    <label htmlFor='name'>Name: </label>
                    <input type="text" name ='name' id='name'/>
                    <label htmlFor='email'>Email: </label>
                    <input type="email" name ='email' id='email'/>
                    <label htmlFor='name'>Message: </label>
                    <input className='text-area' style = {{height: '80px'}}type="text" name ='message' id='message'/>
                    <button className ="btn-contact"> Send </button>
                </form>

            </div>
            <Footer/>
        </div>
    )
}

export default Contact

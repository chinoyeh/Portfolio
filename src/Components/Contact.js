import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import {send} from 'emailjs-com'


const Contact = () => {
    // const [toSend, setToSend] = useState({
    //     name: '',
    //     email: '',
    //     message: '',
      
    //   });
    
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     send(
    //         'service_235hi0e',
    //         'template_u0tq8b8',
    //         toSend,
          
    //       )
    //       console.log('send')
    //         .then((response) => {
    //           console.log('SUCCESS!', response.status, response.text);
    //         })
    //         .catch((err) => {
    //           console.log('FAILED...', err);
    //         });
    //   };
    
    //   const handleChange = (e) => {
    //     setToSend({ ...toSend, [e.target.name]: e.target.value });
    //   };
      
      

      
    return (
        <div className ="contact">
            <Navbar/>
            <div className = 'contact-card'>
                <form className ='contact-form' >
                    <label htmlFor='name'>Name: </label>
                    <input 
                    type="text" 
                    name ='name'
                     id='name'
                   />
                    <label htmlFor='email'>Email: </label>
                    <input
                     type="email" 
                     name ='email' 
                     id='email'
                 />
                    <label htmlFor='name'>Message: </label>
                    <input 
                    className='text-area' 
                    style = {{height: '80px'}}
                    type="text"
                    name ='message'
                     id='message'
                 />
                    <button className ="btn-contact"> Send </button>
                </form>

            </div>
            <Footer/>
        </div>
    )
}

export default Contact

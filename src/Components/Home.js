import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Cole from './images/Me.JPG'






const Home = () => {
    return (
        <div className ="homepage">
            <Navbar/>
      <div className ="home">
      <div className= 'home-image'> <img alt ="Me"src= {Cole}/></div>

<article>
    <p> I'm Chinoyeh, a react developer, writer and part-time make-up artist. I studued Computer Science from the pretigious Bowen University Iwo</p>
</article>

      </div>
         <Footer/>
        </div>
    )
}

export default Home

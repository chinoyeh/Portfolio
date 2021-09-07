import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import Cole from './images/Me.JPG'






const Home = () => {
    return (
        <div className ="homepage">
            <Navbar/>
      <div className ="home">
      <div className= 'home-image'> <img alt ="Me"src= 'https://res-console.cloudinary.com/dxbii4iq8/thumbnails/v1/image/upload/v1631037605/TWVfaG9pcXB1/preview'/></div>

<article>
    <p> I'm Chinoyeh, a react developer, writer and part-time make-up artist. I studued Computer Science from the pretigious Bowen University Iwo</p>
</article>

      </div>
         <Footer/>
        </div>
    )
}

export default Home

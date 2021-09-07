import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Projects} from './Data'


const Developing = () => {
    return (
        <div className ="developing">
          <Navbar/>
          {Projects.map((project)=>{
              const {id,  title ,image, description, link,} =project
              return <div key ={id} className="projects">
                  <h1>{title}</h1>
                  <hr/>
                  <div className ="projects-card"> 
                  <img alt ="Project view" src ={image}/>
                  <div className = "projects-description">
                      <p>{description}</p>
                      <p><a href ={link}> Check it out</a></p>
                      
                      </div>
              

                  </div>


              </div>
          })}
          <Footer/>
          
        </div>
    )
}

export default Developing

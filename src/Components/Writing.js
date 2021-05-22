import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import Footer from './Footer'

const Writing = () => {
    return (
        <div className ="writing">
            <Navbar/>
            <div className ="writing-page">
                <p> I consider my writing talent very diffrent. I draw inspiration from my personal lives, societial happenings and stories I hear. Majority of my work are written in a space of 1-2 hours at most</p>
              <div className ="writing-cards">
               <Link to ='./poetry'>   <h1>Poetry</h1></Link>
                  <p><em>"Poetry is nearer to vital truth than history"...</em> Plato </p>
              </div>
              <div className ='writing-cards'> 
                  <h1>Stories</h1>
                  <p><em>"Great Stories happen to those who can tell them'"...</em> Ira Gas</p>
              </div>
                
            </div>
            <Footer/>
        </div>
    )
}

export default Writing

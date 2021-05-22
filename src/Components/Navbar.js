import React, {useState}from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    return (
        <div>
            <div className = "logo"><h2>Chinoyeh</h2></div>
            <div className = "navlinks">
                <ul>
                    <li> <Link  to ='/'>ME</Link></li>
                    <button onClick ={()=> setShowLinks(!showLinks)} > v </button>
                    <li> <Link to ='/developing'>DEVELOPING</Link></li>
                      <li><Link to ='/writing'>WRITING</Link> </li>
                      <li><Link to ='/contact'>CONTACT ME</Link></li>
                      
                </ul>
            </div>
         
               
        </div>
    )
}

export default Navbar


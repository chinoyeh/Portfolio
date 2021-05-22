import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {PoetryData} from './Data'


const Poetry = () => {

    return (
        <div className ="poetry">
            <Navbar/>
            <div className ='poem-card'>
            {PoetryData.map((poetry)=>{
                    const {id, title, content} = poetry
                    return<artile className='poem' key ={id}>
                        <h1>{title}</h1>
                        <p><em>{content}</em></p>
                          </artile>
                })
                }
            </div>
        
            <Footer/>
            
        </div>
    )
}

export default Poetry

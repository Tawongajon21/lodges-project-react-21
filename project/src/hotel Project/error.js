import React from 'react'
import Hero from './components/hero'
import Banner from './components/banner'
import { Link } from 'react-router-dom'
const Error = () => {
    return (
       <Hero >
           <Banner title="404" subtitle="page not found"/>
               <Link to="/" className="a-btn-rooms">Return Home</Link>
       </Hero>
    )
}

export default Error

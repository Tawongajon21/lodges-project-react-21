import React from 'react'
import Hero from './components/hero'
import Banner from './components/banner'
import { Link } from 'react-router-dom';
import RoomsContainer from './components/roomsContainer';
const Rooms = () => {
    return (
        <div className='div-rooms'>
       <Hero hero="roomsHero" >
<Banner title="Our Lodges"/>
<div className="div-rooms-btn" id="footer-rooms">

<Link to="/" className="a-btn-rooms">
   Return Home
</Link>

</div>

       </Hero>
       <RoomsContainer/>
       </div>
    )
}

export default Rooms

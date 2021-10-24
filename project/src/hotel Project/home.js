import React from 'react'
import Hero from './components/hero';
import Banner from './components/banner';
import { Link } from 'react-router-dom';
import FeaturedRooms from './components/featuredRooms';
import Services from './components/services';

const Home = () => {
    return (
    <>
        <Hero>
            <Banner title="Luxurious Lodges" subtitle="Deluxe lodges starting at $299 ">
            <Link to="/rooms" className="a-btn-rooms">Our Lodges</Link>
            </Banner>

            </Hero>
            <FeaturedRooms/>
            <Services/>
            </>
    )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'
import defaultPhoto from "../photo-four.jpg"
import PropTypes from  'prop-types'
const Room = ({room}) => {
    
    console.log(room);
    const {name,slug,images,price} =room;
    return (
      

        <div className="featured-room">
            <Link to={`/rooms/${slug}`} style={{textDecoration:"none",color:"black"}}>
            <p className="price-tag">
        ${price}/month
        </p>
        <img src={images[0] || defaultPhoto }  width="300" className="featured-room-photo" alt="featured-room"/>
       
    <div className="name-banner">
<span>

{name}
    </span>
    
    </div>
    </Link>
    </div>


    )
}

export default Room
Room.propTypes={
room:PropTypes.shape({
    name:PropTypes.string.isRequired,
    slgug:PropTypes.string.isRequired,
    images:PropTypes.arrayOf(PropTypes.string).isRequired,
price:PropTypes.number.isRequired,
})
}
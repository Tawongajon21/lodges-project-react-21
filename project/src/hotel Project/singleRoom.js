import React, { Component } from 'react'
import DefaultBg from "./photo-four.jpg";

import Banner from "./components/banner";

import { Link } from 'react-router-dom';
import { RoomContext } from './context';
import StyledHero from './components/StyledHero';
import Reviews from './components/reviews';
import propTypes from 'prop-types';
import Booking from './booking';

 
          

export default class SingleRoom extends Component {
    constructor(props){
super(props)
console.log(this.props);
this.state={
    slug:this.props.match.params.slug,
    DefaultBg
};}

static contextType=RoomContext;
    
    componentDidMount(){

    }
    render() {
       
        const {getRoom}= this.context;
     const room= getRoom(this.state.slug);

        
        
        
        if (!room) {
            return <>
            <h3>No Room was Found</h3>
<Link to="/rooms" >Back to Rooms</Link>
            </>
        }
        const {name,description,capacity,pets,breakfast,size,price,extras,images,nearbySpots,slug}= room;
   <Booking name={name} description={description}/>
   
       
        return (
            <>
            <StyledHero img={images[0] || this.state.DefaultBg}  hero="roomHero" >
                <Banner title={`${name} room`}>
                    <Link to="/rooms">Back to rooms</Link>
                </Banner>
            </StyledHero>
            <section className="single-room-page">
            
             <div className=" single-room-photos">
{
    images.map((item,index)=>{
     return    <img key={index} src={item} className='photo-single-room' alt='item-photograph' width="400"/>
    })
}
             </div>

             <div className="single-room-info">
<article className="desc">
<h3 className="h3-single-rooms">
    Details
</h3>
<p className='p-descr-single'>
    {description}
</p>
</article>
<article className="info">
<h3 className='h3-single-rooms'>Info</h3>
<h4 className="h4-single-rooms">
    price: <span style={{fontWeight:400}}> {price}</span> 
</h4>
<h3>
    size:<span style={{fontWeight:400,fontFamily:"'-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif'"}}> {size}</span> 
</h3>
<h4 className="h4-single-rooms">
    {
<span > {pets? "pets are allowed" : "no pets are allowed"} </span>  
    }
 
</h4>
<h4 className="h4-single-rooms">
 Capacity: 
   <span  style={{fontWeight:400}}>
      {
          capacity > 1 ?`${capacity} people` : `${capacity} person`
      }
      </span>   
 
</h4>
<h4 className="h4-single-rooms">
  {
      breakfast && "free breakfast included"
  } 
</h4>
</article>
             </div>
            </section>

            <section className="room-extras">
                <h3 className="h3-single-rooms-extras">
                    Nearby Spots of Interest
                </h3>
                <ul className='extras'>
{
    nearbySpots.map((item,index)=>{
        return <li key={index}>
            {item}
        </li>
    })
}
                </ul>
            </section>
            <section className="room-extras">
                <h3 className="h3-single-rooms-extras">
                    Extras
                </h3>
                <ul className='extras'>
{
    extras.map((item,index)=>{
        return <li key={index}>
            {item}
        </li>
    })
}
                </ul>
            </section>
            <div className='btn-div-link'>
                <Link to={`/booking/${slug}`} className='link-btn-proceed'>Proceed to Book the Lodge</Link>
            </div>
         <div>
             <Reviews />

         </div>
            </>
        )
    }
}

SingleRoom.propTypes={
    room:propTypes.shape({
        name:propTypes.string.isRequired,
        slug:propTypes.string.isRequired,
        images: propTypes.arrayOf(propTypes.string).isRequired,
        price:propTypes.number.isRequired
    })

}


   
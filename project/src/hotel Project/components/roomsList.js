import React from 'react'
import Room from './room'
export default function RoomsList({rooms}) {
    console.log(rooms);
    if (rooms.length===0) {
        return <header className="header-no-rooms-found">
<h3>
            No Room that is Matching your search requirements
        </h3>
        </header> 
    }

    return (
        <article  className=" articles-rooms">
           
                
{
rooms.map((item)=>{
    return <Room key={item.id} className='featured-room' room={item}/>
})
}
                

            
        </article>
    )
}

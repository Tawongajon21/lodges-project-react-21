import React, { Component } from 'react';
import { RoomContext } from '../context';
import { Loading } from './loading';
import Room from './room';
import Title from './title';

export default class FeaturedRooms extends Component {
  static contextType= RoomContext
    render() {
        let {loading,featuredRooms:rooms}= this.context;
        rooms = rooms.map(room=>{
            return <Room key={room.id} room={room}/>
        })
        console.log(rooms.name);

      
        return (
       
                
                <div className="featured-rooms" id='featured-rooms'>
               <header className="featured-header">
               <Title title="Featured Lodges"/>
        </header>
        <article className="articles-rooms">
        {
                       loading ? <Loading/>:rooms
                
                   }
        </article>
           
               </div>
           
             
               
         
        )
    }
}

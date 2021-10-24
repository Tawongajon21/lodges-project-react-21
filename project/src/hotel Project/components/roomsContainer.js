import React from 'react'
import RoomsFilter from "./roomsFilter"
import RoomsList from "./roomsList";
import { withRoomConsumer } from '../context';
import {Loading} from "./loading"

function RoomsContainer({context}) {
    const {loading,sortedRooms,rooms}= context;
    if (loading) {
        return <Loading/>   
       }
         return (
             <div>
           
             <RoomsFilter rooms={rooms} />
             <div>
             <RoomsList rooms={sortedRooms}/>
             </div>
             
            
         </div>
         )

}
export default withRoomConsumer(RoomsContainer)
/* import React from 'react'
import RoomsFilter from "./roomsFilter"
import RoomsList from "./roomsList";
import { RoomConsumer } from '../context';
import {Loading} from "./loading"
export default function RoomsContainer() {
    return (
        <RoomConsumer>
            {
                (value)=>{
                    const {loading,sortedRooms,rooms} = value;
                  if (loading) {
                   return <Loading/>   
                  }
                    return (
                        <div>
                        hello from Rooms 
                        <RoomsFilter rooms={rooms} />
                        <RoomsList rooms={sortedRooms}/>
                       
                    </div>
                    )
                }
            }
        </RoomConsumer>
       
    )
}
*/


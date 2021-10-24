import React, { Component } from 'react';
import items from "./data"
const RoomContext= React.createContext()
 class RoomProvider extends Component {
   state={
   rooms:[],
   sortedRooms:[],
   featuredRooms:[],
   loading:true,
   type:'all',
   capacity:1,
   price:0,
   minPrice:0,
   maxPrice:0,
   minSize:0,
   maxSize:0,
   breakfast:false,
   pets:false
   };
//getData
componentDidMount(){
    let rooms=this.formatData(items);
    console.log(rooms);
    let featuredRooms= rooms.filter(room=>room.featured===true);
    console.log(featuredRooms);
    let maxPrice=Math.max(...rooms.map(item=>item.price))
    let maxSize=Math.max(...rooms.map(item=>item.size))
    this.setState({
        rooms,featuredRooms,
        sortedRooms:rooms,
        loading:false,
        price:maxPrice,
        maxPrice,maxSize

    })
}
formatData(items){
    
    let tempItems=items.map(item=>{
        let id= item.sys.id;
        let images= item.fields.images.map(image=>image.fields.file.url)
   let room= {...item.fields,images,id};
   return room;

    });
    console.log(tempItems);
    return tempItems;
   
}
 getRoom=(slug)=>{
let tempRooms= [...this.state.rooms];
const room= tempRooms.find(room=>room.slug=== slug);
console.log(room);

return room;

}
getBooking=(slug)=>{
    let tempBook=[...this.state.rooms];
  
    const book = tempBook.find(room=>room.slug===slug);
 return book;
   
    
    
}
handleChange=event=>{
    const target= event.target;
    const value= target.type==='checkbox'?target.checked:target.value;
    
    const name= event.target.name;
    
   
    const checked= event.target.checked;
    console.log(value);
    this.setState({
        [name]:value
    },this.filterRooms);
    this.setState({
        [checked]:value
    },this.filterRooms)

}
filterRooms=()=>{
   let {
       rooms,
       type,
       capacity,
       minSize,
       maxSize,
       breakfast,
       price,
       pets
   }= this.state;
   //all the rooms
   let tempRooms=[...rooms];
   //transform values;
   capacity= parseInt(capacity);
   price= parseInt(price);



   console.log(tempRooms);
   if(type!=="all"){
tempRooms= tempRooms.filter(room=>room.type===type);

   }
   //filter by capacity
   if(capacity!==1){
tempRooms= tempRooms.filter(room =>room.capacity>=capacity)
   }
   console.log(tempRooms);

   //change price by Price
   tempRooms=tempRooms.filter(room=>room.size>=minSize&& room.size<=maxSize)
        if (breakfast) {
            tempRooms=tempRooms.filter(room=>room.breakfast===true)
        }
        if (pets) {
            tempRooms=tempRooms.filter(room=>room.pets===true)
        }
tempRooms=tempRooms.filter(room=>room.price<=price)
   this.setState({
       sortedRooms:tempRooms
   })
}

    render() {

        return (
            <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,
            handleChange:this.handleChange,
            getBooking:this.getBooking
            }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}
const RoomConsumer=RoomContext.Consumer;

export function withRoomConsumer(Component) {
    return  function ConsumerWrapper (props) {
        return <RoomConsumer>
            {
                value=> <Component {...props} context={value}></Component>
            }
        </RoomConsumer>
    }
}



export {RoomProvider,RoomConsumer,RoomContext}
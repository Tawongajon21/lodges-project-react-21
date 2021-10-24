import React from 'react'
import {useContext} from 'react';
import { RoomContext } from '../context';
import Title from "./title";
const getUnique=(items,value)=>{
    return [...new Set(items.map(item=>item[value]))]
}
function RoomsFilter({rooms}) {
const context = useContext(RoomContext);
console.log(context);


const {handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets}= context;
let types= getUnique(rooms,"type");
types= ['all',...types];
types=types.map((item,index)=>{
    return <option value={item} key={index}>
{item}
    </option>
})
console.log(types);
let people= getUnique(rooms,'capacity');
people= people.map((item,index)=>{
    return <option key={index} value={item}>
{item}
    </option>
})
    return (
        <div className="search-div">
            
            <Title title='Search Lodges'/>
           
            <form className='filter-form'>

    <label htmlFor='type'>
        Room Type
    </label>
    <select name='type' id='type' value={type} onChange={handleChange}>
{
    types
}
    </select>
    


            

    <label htmlFor='capacity'>
        Guests
    </label>
    <select name='capacity'
     id='capacity' 
    value={capacity} 
    onChange={handleChange}>
{
    people
}
    </select>
    


         
         

     
           <label htmlFor="price">
               Room Price ${price}
           </label>
           <input type='range' name='price'
            min={minPrice}
            id='price'
            value={price}
            onChange={handleChange}
            max={maxPrice}
            />

           <label htmlFor="size">
             Room  Size 
           </label>
           <input type='number' name='minSize'
          
            id='minSize'
            value={minSize}
            onChange={handleChange}
        
            />
           <input type='number' 
           name='maxSize'
           
            id='maxSize'
            value={maxSize}
            onChange={handleChange}
      
            />
       
       
       
               <input type="checkbox" 
               checked={breakfast}
               onChange={handleChange}
               name="breakfast"/>
               <label htmlFor='breakfast'>
                breakfast
               </label>
        
       
       
               <input type="checkbox" 
               checked={pets}
               onChange={handleChange}
               name="pets"/>
               <label htmlFor='pets'>
                   pets
               </label>
               </form>
       
       </div>
         
        
    )
}

export default RoomsFilter

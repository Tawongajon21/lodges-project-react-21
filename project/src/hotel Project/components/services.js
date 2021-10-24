import React, { Component } from 'react';
import {FaHiking,FaShuttleVan,FaCoffee} from 'react-icons/fa'
import Title from './title'
export default class Services extends Component {
    state={
        services:[
            {
                id:1,
                icon:<FaCoffee/>,
                title:"Access to Nearby Chill out Spots",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa magnam corrupti nihil reprehenderit dicta suscipit, debitis unde sapiente adipisci."  ,

            },
            {
                id:2,
                icon:<FaShuttleVan/>,
                title:"Free Rides",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa magnam corrupti nihil reprehenderit dicta suscipit, debitis unde sapiente adipisci."  ,

            },
            {
                id:3,
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa magnam corrupti nihil reprehenderit dicta suscipit, debitis unde sapiente adipisci."  ,

            }
        ]
    }
    render() {
        return (
            <div className='services-component' id="services-id">
               <Title title="Services"/>
             <div className='services'>
             
                 {
this.state.services.map((service)=>{
    return <div className='single-service'key={service.id} >
<span className='span-photo'>
    {service.icon}
</span>
<h3 className='title-service'>{service.title}</h3>
<p className='info'>
    {service.info}
</p>
    </div>
})                     
                 }
             </div>
    
            </div>
        )
    }
}

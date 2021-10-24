
import img2 from "./bg.jpg";
import img3 from "./photo-two.jpg";
import img4 from "./photo-three.jpg";
import img5 from "./photo-five.jpg";
import img6 from "./photo-six.jpg";
import img7 from "./photo-seven.jpg";
import img8 from "./photo-eight.jpg";
import img9 from "./photo-ten.jpg";
import img10 from "./photo-eleven.jpg";
import img11 from "./photo-twelve.jpg";
import img12 from "./photo-thirteen.jpg";
import img13 from "./photo-fourteen.jpg";
import img15 from "./photo-fifteen.jpg";

const items =   [
{
    sys:{
        id:"1"
    },
    fields:{
        name:'Single Economy',
        slug:'single-economy',
        type:'single',
        price:200,
        size:300,
        capacity:3,
        pets:false,
        breakfast:false,
        featured:false,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa magnam corrupti nihil reprehenderit dicta suscipit, debitis unde sapiente adipisci." , 
   
    extras:[
        "Single Piillow",
        "Unlimited Wifi",
        "Gaming Console PS4",
        "Swimming Pool",
        "Game Shoot",

    ],
    images:[
        {
            fields:{
                file:{
                    url :img2
                }
            }
        },
        {
            fields:{
                file:{
                    url :img3
                }
            }
        },
        {
            fields:{
                file:{
                    url :img4
                }
            }
        },
    ],
    nearbySpots:[
        "Chicken Inn 1km Away from the Lodge",
        "Ster Kinekor Movie Cinema at Westgate ",
        'Westgate Shopping Mall'
    ]
    
},

},
{
    sys:{
        id:"2"
    },
    fields:{
        name:'Presidential Suite',
        slug:'presidential-economy',
        type:'double',
        price:500,
        size:100,
        capacity:10,
        pets:true,
        breakfast:true,
        featured:true,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa magnam corrupti nihil reprehenderit dicta suscipit, debitis unde sapiente adipisci."  
    ,
    extras:[
        "Single Piillow",
        "Unlimited Wifi",
        "Good Ocean View",
        "Boat Cruise",
        "Game Shoot",
        "Dam Viewing",

    ],
    images :[
        {
            fields:{
                file:{
                    url :img5
                }
            }
        },
        {
            fields:{
                file:{
                    url :img6
                }
            }
        },
        {
            fields:{
                file:{
                    url :img7
                }
            }
        },
    ],
    nearbySpots:[
        "Vumba Dam",
        "Garlitos Chicken Joint ",
        'Starbucks'
    ]
}
,


},
{
    sys:{
        id:"3"
    },
    fields:{
        name:'Double Deluxe',
        slug:'double-deluxe',
        type:'double',
        price:250,
        size:150,
        capacity:7,
        pets:true,
        breakfast:false,
        featured:true,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa magnam corrupti nihil reprehenderit dicta suscipit, debitis unde sapiente adipisci."  
    ,
    extras:[
        "Double Piillow",
        "Unlimited Wifi",
        "Gaming Console XBOX",
        "Swimming Pool",
        " Pool Table",

        "Game Shoot",

    ],
    images:[
        {
            fields:{
                file:{
                    url :img8
                }
            }
        },
        {
            fields:{
                file:{
                    url :img9
                }
            }
        },
        {
            fields:{
                file:{
                    url :img10
                }
            }
        },
    ]
,


nearbySpots:[
    "Zambezi River",
    "Croc Farm ",
    'Fun Lobbby'
]
}
}
,
{
    sys:{
        id:"4"
    },
    fields:{
        name:'Big House',
        slug:'big-house',
        type:'famil',
        price:400,
        size:300,
        capacity:10,
        pets:false,
        breakfast:false,
        featured:false,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa magnam corrupti nihil reprehenderit dicta suscipit, debitis unde sapiente adipisci."  
    ,
    extras:[
        "Single Piillow",
        "Unlimited Wifi",
        "Gaming Console PS4",
        "Swimming Pool",
        "Game Shoot",

    ],
    images:[
        {
            fields:{
                file:{
                    url :img11
                }
            }
        },
        {
            fields:{
                file:{
                    url :img12
                }
            }
        },
        {
            fields:{
                file:{
                    url :img12
                }
            }
        },
    ]
,
nearbySpots:[
    "Vumba Dam",
    "Garlitos Chicken Joint ",
    'Starbucks'
]


},

},
{
    sys:{
        id:"6"
    },
    fields:{
        name:'Catalan House',
        slug:'catalan-house',
        type:'family',
        price:900,
        size:350,
        capacity:15,
        pets:true,
        breakfast:true,
        featured:true,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa magnam corrupti nihil reprehenderit dicta suscipit, debitis unde sapiente adipisci."  ,
   
    extras:[
        "Single Piillow",
        "Unlimited Wifi",
        "Gaming Console PS4",
        "Swimming Pool",
        "Game Shoot",

    ],
    images:[
        {
            fields:{
                file:{
                    url :img10
                }
            }
        },
        {
            fields:{
                file:{
                    url :img9
                }
            }
        },
        {
            fields:{
                file:{
                    url :img11
                }
            }
        },
    ]
,

nearbySpots:[
    "Vumba Dam",
    "Garlitos Chicken Joint ",
    'Starbucks'
]
}
},
{
    sys:{
        id:"7"
    },
    fields:{
        name:'Jameson Cabins',
        slug:'jameson-cabins',
        type:'family',
        price:200,
        size:150,
        capacity:5,
        pets:true,
        breakfast:true,
        featured:false,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa magnam corrupti nihil reprehenderit dicta suscipit, debitis unde sapiente adipisci."  ,
   
    extras:[
        
        "Swimming Pool",
        "Game Shoot",
        "Fire Place",
        "64 inch SmartTV",
        

    ],
    images:[
        {
            fields:{
                file:{
                    url :img15
                }
            }
        },
        {
            fields:{
                file:{
                    url :img13
                }
            }
        },
        {
            fields:{
                file:{
                    url :img11
                }
            }
        },
    ]
,

nearbySpots:[
    "Vumba HotSprings",
    "Innscor Food Court ",
    'Nyanga Mt 15km from the Lodge'
]
}
},
]
export default items;
console.log(items.length);
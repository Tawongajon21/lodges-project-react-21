import {React,useState} from 'react';



import Payment from './payment';

function Booking({name,description}) {
    const [checkIn,setCheckIn] = useState("");


  const [checkout,setCheckOut] = useState("");
    const [show,setShow] = useState(false);
    const [showForm,setShowForm]= useState(true);
    const [dates,setDates]= useState([])
  const handleSubmit=(e)=>{
e.preventDefault();
if (checkIn &&checkout !=="") {
    const newDate= {id:Math.random().toString(),checkout:checkout,checkIn:checkIn}
setDates([...dates,newDate])
setShow(true)
setShowForm(false)
console.log(dates,newDate);
}
  }
  
    return (
        <div className='div-booking-component'>
 {
            showForm ?     <div className='div-pad-top'>

            <header className="headder-book">
 
              <h2>Welcome to The Booking Page</h2>
            </header>
             <form  className="form-book"  onSubmit={handleSubmit}>
                 <label>Check In Date</label>
                 <input type="date" value={checkIn} onChange={(e)=>setCheckIn(e.target.value)} className="input-book"/>
                 <label>Check Out Date</label>
                 <input type="date" value={checkout} id="btn-pay-input" onChange={(e)=>setCheckOut(e.target.value)} className="input-book"/ >
           {     /* <Link to={`/booking`} className='link'> <a href="#" className='btn-pay'>Proceed to Pay for the Lodge</a> </Link> */}
             <button className="btn-pay" >
          Next
             </button>
             </form>
 
         </div> :
 <div className='btn-div-adjust'>
     <button onClick={
      ()=>{
        setShow(false)
        setShowForm(true)  
      }
     }
     className='btn-div-adjust-btn'
     >
         Adjust Date
     </button>
     <Payment checkIn={checkIn} checkout={checkout}/>
 </div>
            
        }
        </div>
       
     
    )
}

export default Booking

import {React,useState} from 'react'
import Modal from './modal';
import Title from './title';



const Reviews = ({room}) => {
   
    
    const bookingName= room;
    console.log(bookingName);

 
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [feedback,setFeedback]= useState("");
    const [comments,setComments]= useState([]);
   
    const [alert,setAlert]= useState({status:false,content:"Helo",outcome:'success'});
   




    
   
   

 
const handleSubmit= (e)=>{
    e.preventDefault();
 
        const newComment= {
            id:Math.random().toString(),
            name:name,
            email:email,
            feedback:feedback
        }
        console.log(newComment);
        if (name && feedback && email !=="") {
            setComments((comments)=>{
                return [...comments,newComment]
            })
            setName("")
            setEmail("")
            setFeedback("")
            setAlert({status:true,content:"Comment Submitted Succesfully",outcome:'success'})
           
         
                
         
        }
        else{
            setAlert({status:true,content:"Please Enter Values",outcome:"failed"})

        }
      
 
  
   
   
}
    return (
        <div className='reviews-part'>
        <Title title='Reviews' />

       
        <div className='div-form-reviews'>
            <header className='review-header'>
                <h3>Leave Your Comments Here It will help the Hotel To Get More Customers</h3>
            </header>
            <section className='section-modal'>
            {
            alert.status && <Modal content={alert.content}/>
        }
            </section>
        
            <form onSubmit={handleSubmit} className='form-review'>
                <label>Name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)}  value={name}/>
                <label>Email</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
                <label>Comment</label>
        <textarea cols='30' rows='5' onChange={(e)=>setFeedback(e.target.value)} value={feedback}/>
        <button className='btn-add'>Add</button>
            </form>
        </div>

        {
            comments.length ===0 ? "" :  <Title title='Comments' />
        }
       
        <section>
            <article className="number-of-comments">
                {
                    comments.length === 0 ? "" :  <header>
                        <h4>{comments.length} Comment</h4>
                    </header>
                }
                </article>
            {
           
            
                comments.map((item)=>{
                    const {id,name,email,feedback}=item
                    return <div key={id} className='comment-div'>
                        <p className='comment-name'>
                            {name}
                        </p>
                        <p className='comment-email'>
                            {email}
                        </p>
                        <p className='comment-feedback'>
                            {feedback}
                        </p>
                    </div>
                })
            
            }
         
        </section>
       
                    </div>
    )
}

export default Reviews

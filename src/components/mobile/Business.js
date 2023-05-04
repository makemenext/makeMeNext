import React from 'react'
import "../../assets/styles/mobile/Business.css";
import { useState } from 'react';
function Business() {
 const [businessdata, setBusinessdata] = useState({
     Name:"",
     SalonName: "",
     number:"",
     email:"",
     ask:""
 })
 console.log(businessdata) 
 function changhandler(event){
     setBusinessdata(prevBusinessdata=>{
      return {
        ...prevBusinessdata,
        [event.target.name]:event.target.value,

      }
     })
 }
//  function submithandler(){
//       console.log(businessdata)
//  }
  return (
    <div className='wrapper'>
      <div className='top-level'>

      <div className='heading-section '>
         <div className='heading'> Makemenext Business </div>
          <div className='para'> Just one step away from making a revolutionary change in the way you operatre your salon
          </div>
      </div>
             
      <form className='form-top'>
        <div className='inner-form' >

        <div className='input-label'>
            <div className='dot'></div>
         <label className='label'> Enter Your Name </label>
        </div>
        <div className='input-feild' >
        <input className='input-area' type="text" name='Name' onChange={changhandler} />  
            </div>  

            
        
          <div className='input-label'>
            <div className='dot'></div>
         <label className='label'> Enter Your Salon Name </label>
        </div>
        <div className='input-feild' >
        <input className='input-area' type="text" name='SalonName' onChange={changhandler} />
           </div>  

          <div className='input-label'>
            <div className='dot'></div>
         <label className='label' > Enter Your Contact Number </label>
        </div>
          <div className='input-feild' >
          <input className='input-area' type="text" name='number' onChange={changhandler} /> 
            
          </div>  

          <div className='input-label'>
            <div className='dot'></div>
         <label className='label'> Enter Your Email Adress</label>
        </div>
        <div className='input-feild'>
        <input className='input-area' type="text" name='email' onChange={changhandler} /> 
        </div>  

          <div className='input-label'>
            <div className='dot'></div>
         <label className='label'>Ask </label>
        </div>
        <div className='text-feild' >
            <textarea className='txt-area'  name='ask' onChange={changhandler} />
           </div>  
              
          <div className='btn-div' >
            <button className='submit-btn'>Submit</button>
          </div>
          
        </div>
       </form>
      </div>
    </div>
  )
}

export default Business


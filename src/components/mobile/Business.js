import React from 'react'
import "../../assets/styles/mobile/Business.css";
function Business() {
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
        <input className='input-area' type="text" />  
            </div>  

            
        
          <div className='input-label'>
            <div className='dot'></div>
         <label className='label'> Enter Your Salon Name </label>
        </div>
        <div className='input-feild' >
        <input className='input-area' type="text"  color />
           </div>  

          <div className='input-label'>
            <div className='dot'></div>
         <label className='label' > Enter Your Contact Number </label>
        </div>
          <div className='input-feild' >
          <input className='input-area' type="text" /> 
            
          </div>  

          <div className='input-label'>
            <div className='dot'></div>
         <label className='label'> Enter Your Email Adress</label>
        </div>
        <div className='input-feild'>
        <input className='input-area' type="text" /> 
        </div>  

          <div className='input-label'>
            <div className='dot'></div>
         <label className='label'> Enter Your Location</label>
        </div>
        <div className='input-feild' >
            <input className='input-area' type="text" />
           </div>  
              
          <div className='btn-div' >
            <button className='submit-btn' >Submit</button>
          </div>
          
        </div>
       </form>
      </div>
    </div>
  )
}

export default Business


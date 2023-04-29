import React from 'react'
import { useState } from 'react';
import "../../assets/styles/mobile/Counter.css";

function Counter() {
 const [count, setCount] = useState(0);
  
 function dechandler(){
      if(count == 0){
        setCount(0);
      }
      else{
          setCount(count-1);
        }
      }   
 
  function inchandler(){
      setCount(count+1);
      }   
 return (
    <div className='main-box' >
       <button className='left-btn' onClick={dechandler}>-</button>
       <div  >{count}</div>
       <button className='right-btn' onClick={inchandler}>+</button>
    </div>
  )
}

export default Counter

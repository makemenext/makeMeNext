import React from 'react'
import "../../assets/styles/mobile/Price.css";
import Counter from './Counter';
import "../../assets/styles/mobile/Counter.css";

function Price() {
  return (
    <div className='root'>

    <div className='parent'>
        <div className='child1'>
            <div className='haircut'>
                Hair Cut
            </div>
            <div className='rs'>
            ₹70
            </div>

        </div>
        <div className='child2'>
          <Counter/>
            

        </div>
      
    </div>
    </div>
  )
}

export default Price

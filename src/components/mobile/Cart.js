import React from 'react';
import "../../assets/styles/mobile/Cart.css";

const items = [
  { name: 'Items Total', price: 220 },
  { name: 'Discount', price: -10 },
  { name: 'Taxes & Charges', price: 2.2 },
  { name: 'To Pay', price: 212.2 },

]
function ItemList() {
  return (
    <ul className='no-bullets'>
      {items.map((item, index) => (
        <li key={index}>
          <div className='name' >{item.name}</div>
          <div className='price'>{item.price}</div>
        </li>
      ))}
    </ul>
  );
}

function Cart() {
  return (
    <div className='parentt'>
      <div className='book-myslot'>
      < button className='book-slot-button'>Book time slot</button>
      </div>

       <div className="input-divv"> 
        <div className="input-btnn">
          
          <input
            className="enter-code"
            placeholder=" Have a coupon Code?"
          />
        
          <button className='apply'>Apply</button>

        </div>
      </div> 
  
      
      
    
    <div className='list'>
      <ItemList />
      
    </div>
    <div className='two-button'>
      <button className='left-button'> ₹ 212.2
      </button>
      <button className='right-button'>Pay</button>
    </div>
    </div>
  );
}


export default Cart;
// const ButtonGroup = ({ leftButtonProp }) => {
// {leftButtonProp}
// }


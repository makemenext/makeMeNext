import React from 'react';
import "../../assets/styles/mobile/Cart.css";

const items = [
  { name: 'Items Total', price: 220 },
  { name: 'Discount', price: -10 },
  { name: 'Taxes & Charges', price: 2.2 },
  { name: 'To Pay', price: 212.2 },
];

function ItemList() {
  return (
    <ul>
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

      {/* <div className="input-divv">
        <div className="input-btnn">
          
          <input
            className="input-textt"
            placeholder=" Have a coupon Code?"
          />

        </div>
      </div> */}
  
      
      
    
    <div className='list'>
      <ItemList />
    </div>
    </div>
  );
}

export default Cart;

import React, { useState, useEffect } from "react";

const ApplyOffer = () => {
  const [couponCode, setCouponCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);

  var coupons = {
    discount1: "5",
    discount2: "10",
    discount3: "15",
    discount4: "20",
    discount5: "25",
  };

  const handleCouponCodeChange = (event) => {
    setCouponCode(event.target.value);
  };

  // useEffect(() => {

  // },[couponCode])

  const handleApplyOffer = () => {
    Object.keys(coupons).forEach((key) => {
      if (couponCode == key) {
        setDiscountAmount(coupons[couponCode]);
      }
    });
  };

  return (
    <div>
      <label htmlFor="coupon-code">Coupon Code:</label>
      <input
        type="text"
        id="coupon-code"
        value={couponCode}
        onChange={handleCouponCodeChange}
      />
      <button onClick={handleApplyOffer}>Apply</button>
      <p>Discount Amount: {discountAmount}%</p>
    </div>
  );
};

export default ApplyOffer;

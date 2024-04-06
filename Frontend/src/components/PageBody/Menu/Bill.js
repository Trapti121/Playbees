import React, { useState } from 'react';

const generateBill = () => {
  const order = JSON.parse(localStorage.getItem('orderInfo'));
  console.log(order);
  return order;
};

const Bill = () => {
  const [orderInfo, setOrderInfo] = useState(null);

  const handleGenerateBill = () => {
    const order = generateBill();
    setOrderInfo(order);
  };

  return (
    <div className='BillContainer'>
      <button onClick={handleGenerateBill}>Generate Bill</button>

      {orderInfo && (
        <div className='BillBox'>
          <h2>User Information:</h2>
          <p>Name: {orderInfo.name}</p>
          <p>User Id: {orderInfo._id}</p>
          <p>Table Number: {orderInfo.table}</p>
          <p>Total Bill: {orderInfo.totalBill}</p>
        </div>
      )}
    </div>
  );
};

export default Bill;



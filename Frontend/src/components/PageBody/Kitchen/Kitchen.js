import React, { useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import KitCard from './kitCard';
import './kitchen.css'
const Kitchen = () => {
  const [order, setOrder]=useState([]);
  
  useEffect(() => {
    getTables();
  }, []);

  const getTables = async () => {
    try {
      let result = await fetch('http://localhost:5000/kitchen');
      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }
      let data = await result.json();
      setOrder(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className='kitTab'>
          <div className="kitOrders">
            <h2>Orders</h2>
          </div>
          {/* <Link to='/Menu/bill'>
            <button className='btn'>Done</button>
          </Link> */}
     
        
          <hr />
        
        <div className='kitCont'>
         {order.map((data,index)=>(
          <KitCard
          key={data.id}
          data={data}
          />
         )
         )}
        </div>
 
    </div>
  );
}
export default Kitchen;